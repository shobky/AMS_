import React, { useRef } from 'react'
import GoogleAuth from '../GoogleAuth'
import '../auth.css'
import logo from '../../assets/logo.png'
import { auth } from '../../firebase/Config'
import { GiIronHulledWarship } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
const Signup = () => {
    const { EmailAndPasswordSignup, loading } = useAuth()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()


    const handleSignupSubmit = (e) => {
        e.preventDefault()
        EmailAndPasswordSignup(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div className='auth'>
            <Link to='/' className='auth_logo-container'>
                <img src={logo} className='auth_logo' alt='logo' /><p>MS</p></Link>
            <form onSubmit={handleSignupSubmit} autoComplete='on' className='auth_form__signup'>
                <div className='auth_input_div'>
                    <label>Name</label>
                    <input ref={nameRef} autoCapitalize='off' placeholder='Your Name' className='auth_input__signup' />
                </div>
                <div className='auth_input_div'>
                    <label>Email</label>
                    <input ref={emailRef} autoCapitalize='off' placeholder='example@provider.com' className='auth_input__signup' />
                </div>
                <div className='auth_input_div'>
                    <label>Password</label>
                    <input autoCapitalize='off' ref={passwordRef} placeholder='**************' className='auth_input__signup auth_input__password' />
                </div>
                <button disabled={loading} type='submit' className='auth_button__signup'>{loading ? 'loading...' : 'Sign Up'}</button>
                <p className='auth_or'>OR</p>
                <GoogleAuth />
                <Link to='/login' className='auth_forawrd-link'> Login instead </Link>
            </form>
        </div>
    )
}

export default Signup