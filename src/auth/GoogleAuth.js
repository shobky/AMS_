import React, { useEffect, useState } from 'react'
import { auth, signInWithGoogle } from '../firebase/Config'
import { getRedirectResult, GoogleAuthProvider } from 'firebase/auth'

const GoogleAuth = () => {
    const [ user, setUser] = useState()

    const loginWithGoogle = () => {
        signInWithGoogle()
        getRedirectResult(auth)
            .then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res);
                const token = credential.accessToken;
                //
                setUser(res.user)
                console.log({ user: res.user, token, credential })
            })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
        })
    }, [user])

    return (
        <div>
            <button onClick={loginWithGoogle}>loginWithGoogle</button>
            <p>{user?.email}</p>
        </div>
    )
}

export default GoogleAuth