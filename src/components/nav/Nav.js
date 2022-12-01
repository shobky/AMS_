import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'

const Nav = ({ active, theme }) => {
    return (
        <nav className='navigation-container'>
            <div className='nav_header'>
                <img alt='' className='nav_logo' src={logo} />
                <p className='nav_name'>AMS </p>
                {
                    window.innerWidth < 800 ?
                        <button className='nav_mobile-ico_btn'><CgProfile  /></button> : ""
                }
            </div>
            <div className='nav_links-group'>
                <Link className={active === 'home' ? 'nav_link__active' : "nav_link "}>FEATURE</Link>
                <Link className='nav_link'>ABOUT</Link>
                <Link className='nav_link'>VIDEOS</Link>
                <Link className='nav_link'>CONTACT</Link>
                <p className='nav_link nav_link_ico'><CgProfile /></p>
            </div>



        </nav>
    )
}

export default Nav