import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { GiShipBow } from 'react-icons/gi'
import { BsTelephoneInbound } from 'react-icons/bs'
import { FaEnvelope, FaFax } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_flexbox'>
                <div className='footer_sec'>
                    <div className='footer_link-group'>
                        <p className='footer_header'>BROWSE  MORE</p>
                        <Link to='/' className='footer_link'>HOME <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/owner' className='footer_link'>SHIP OWNER <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/building' className='footer_link'>SHIP BUILDING <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/salvage' className='footer_link'>SHIP SALVAGE <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/tanks&pipes' className='footer_link'>TANKS AND PIPES <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/parts' className='footer_link'>SHIP PARTS <IoIosArrowForward className='footer_link_arr-ico' /> </Link>
                        <Link to='/trading' className='footer_link'>DISEL TRADING <IoIosArrowForward className='footer_link_arr-ico' /> </Link>

                    </div>
                    <GiShipBow className='footer-ship-ico' />
                </div>
                <div className='footer_adresses'>
                    <p className='footer_header'>CONTACT</p>
                    <div className='footer_address1'>
                        <p className='footer_adress-header'>Egypt Office</p>
                        <p>26- Koshlak Elsawahel Borg Elsheikh</p>
                        <p>Port Said, Egypt</p>
                        <div className='footer_numbers'>
                            <a href='tel:0020663211644' className='footer_numbers_p' > <span><BsTelephoneInbound /></span> 0020663211644</a>
                            <a href='fax: 0020663211727 ' className='footer_numbers_p' > <span><FaFax /></span> 0020663211727</a>
                        </div>

                    </div>
                </div>
                <br />
                <div className='footer_address2'>
                    <p className='footer_adress-header'>UAE Office</p>
                    <p>Office 304, Dubai customs building</p>
                    <p>Al Khaleej ST, Deira, Dubai</p>
                    <div className='footer_numbers'>
                        <a href="tel: +971569509770" className='footer_numbers_p' > <span><BsTelephoneInbound /></span> +971569509770</a>
                        <a href='fax : 92175 ' className='footer_numbers_p' > <span><FaEnvelope /> </span> 92175, UAE</a>
                    </div>
                </div>
            </div>
            <p className='copyright-msg'>Copyright © 2023 AMS. All rights reserved.

                Developed by <a className='copryRight-msg_name' href='https://www.linkedin.com/in/ahmed-shobky'>Ahmed Shokby</a>.</p>
        </div>
    )
}

export default Footer