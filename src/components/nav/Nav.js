import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { auth } from '../../firebase/Config'
import { useState } from 'react'
import { RiArrowDropRightLine, RiLoginCircleFill } from 'react-icons/ri'
import { signOut } from 'firebase/auth'
import { useAuth } from '../../contexts/AuthContext'

const Nav = ({ active, theme, activeNavMb }) => {

    const navigate = useNavigate()
    const { logout } = useAuth()

    return (
        <nav className='navigation-container'>
            <div id='navHeader' className='nav_header'>
                <div className='nav_logo-container'>
                    <img alt='' className='nav_logo' src={logo} />
                    <p className='nav_name'>MS </p>
                </div>
                {
                    window.innerWidth < 800 ?
                        <button onClick={activeNavMb} className='nav_mobile-ico_btn'> {auth?.currentUser?.photoURL ? <img src={auth?.currentUser?.photoURL} className='nav_userimg-link' alt="" /> : <CgProfile />}</button> : ""
                }
            </div>
            <div id='navMb' className='nav_links-group__inActive nav_links-pc'>
                <Link to='/' className={active === 'home' ? 'nav_link__active' : "nav_link "}>Featured <RiArrowDropRightLine className='nav_arr-ico' /></Link>
                <Link to='/about' className={active === 'about' ? 'nav_link__active' : "nav_link "}>About <RiArrowDropRightLine className='nav_arr-ico' /></Link>
                <Link to='/videos' className={active === 'videos' ? 'nav_link__active' : "nav_link "}>Videos <RiArrowDropRightLine className='nav_arr-ico' /></Link>
                <br className='disnone-pc'/>
                <Link to='/profile' className='nav_link'>Edit profile <RiArrowDropRightLine className='nav_arr-ico' /></Link>
                <a href='#footer' className='nav_link'>Contact <RiArrowDropRightLine className='nav_arr-ico' /></a>
                {
                    !auth?.currentUser ?
                        <Link to='/login' className='nav_login-link'>Login <RiLoginCircleFill /></Link>
                        :
                        <button onClick={() => logout()} className='nav_logout-btn'>Logout <RiLoginCircleFill /></button>

                }
                {/* <Link to='/auth' className='nav_link nav_link_ico'><CgProfile /></Link> */}
            </div>



        </nav>
    )
}

export default Nav