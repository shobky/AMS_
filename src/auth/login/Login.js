import React, { useRef } from 'react'
import GoogleAuth from '../GoogleAuth'
import '../auth.css'
import logo from '../../assets/logo.png'
import { auth } from '../../firebase/Config'
import { GiIronHulledWarship } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
const Login = () => {
    const { EmailAndPasswordLogin, loading } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        EmailAndPasswordLogin(emailRef, passwordRef)
    }
    return (
        <div className='auth'>
            <Link to='/' className='auth_logo-container'>
                <img src={logo} className='auth_logo' alt='logo' /><p>MS</p></Link>
            <GiIronHulledWarship className='auth_ship-ico' />
            <form onSubmit={handleSubmitLogin} autoComplete='on' className='auth_form'>
                <div className='auth_input_div'>
                    <label>Email</label>
                    <input ref={emailRef} autoCapitalize='off' placeholder='example@provider.com' className='auth_input' />
                </div>
                <div className='auth_input_div'>
                    <label>Password</label>
                    <input autoCapitalize='off' ref={passwordRef} placeholder='**************' className='auth_input auth_input__password' />
                </div>
                <button disabled={loading} type='submit' className='auth_button'>{loading ? 'loading...' : 'Sign In'}</button>
                <p className='auth_or'>OR</p>
                <GoogleAuth />
                <Link to='/signup' className='auth_forawrd-link'> Signup instead </Link>
            </form>
        </div>
    )
}

export default Login