import React, { useEffect, useState } from 'react'
import { auth, signInWithGooglePopup } from '../firebase/Config'
import { getRedirectResult, GoogleAuthProvider } from 'firebase/auth'
import './auth.css'
import { FcGoogle } from 'react-icons/fc'

const GoogleAuth = () => {
    const [user, setUser] = useState()

    const loginWithGoogle = () => {
        signInWithGooglePopup()
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
            <button className='login_with_google_btn' onClick={loginWithGoogle}><span><FcGoogle /></span>Continue with Google</button>
            {/* {user?.email} */}
        </div>
    )
}

export default GoogleAuth