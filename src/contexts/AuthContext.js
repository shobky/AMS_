import React, { useContext, useEffect, useState } from "react"
import { auth, signInWithGoogle } from '../firebase/Config'
import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { Navigate, useNavigate } from "react-router"

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    const EmailAndPasswordSignup = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/')
            setLoading(false)
        }).catch((err) => {
            alert(err.message)
            // setAuthError(err.message)
            setLoading(false)
        })

    }

    const EmailAndPasswordLogin = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // ...
                setLoading(false)
                navigate('/')

            })
            .catch((error) => {
                setLoading(false)
                console.log(error, error.message)
            });
    }

    // const login = async () => {
    //     setBuffer(true)
    //     navigate('/')
    //     signInWithGoogle().then(() => {
    //         getRedirectResult(auth)
    //             .then(() => {
    //                 setLoading(true)
    //                 setBuffer(false)
    //             })
    //             .catch((err) => {
    //                 setError(err.message)
    //                 // const credential = GoogleAuthProvider.credentialFromError(err)
    //                 setLoading(true)
    //                 setBuffer(false)

    //                 //
    //                 console.log(error, 'er')

    //             })

    //     })


    // }

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
    }, [currentUser])

    const values = {
        // login,
        EmailAndPasswordSignup,
        EmailAndPasswordLogin,
        currentUser,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={values}>
            {loading && <div className="loading_div"></div>}
            {children}
        </AuthContext.Provider>
    )
}
