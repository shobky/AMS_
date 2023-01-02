import React from 'react'
import GoogleAuth from '../GoogleAuth'
import '../auth.css'
import logo from '../../assets/logo.png'
import { auth } from '../../firebase/Config'
import { GiIronHulledWarship } from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='auth'>
            <Link to='/' className='auth_logo-container'>
                <img src={logo} className='auth_logo' alt='logo' /><p>MS</p></Link>
            <GiIronHulledWarship className='auth_ship-ico' />
            <form autoComplete='on' className='auth_form'>
                <div className='auth_input_div'>
                    <label>Email</label>
                    <input autoCapitalize='off' placeholder='example@provider.com' className='auth_input' />
                </div>
                <div className='auth_input_div'>
                    <label>Password</label>
                    <input placeholder='**************' className='auth_input auth_input__password' />
                </div>
                <button className='auth_button'>Sign In</button>
                <p className='auth_or'>OR</p>
                <GoogleAuth />
                <Link className='auth_forawrd-link'> Signup instead </Link>
            </form>
        </div>
    )
}

export default Login