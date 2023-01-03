import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import './about.css'

const About = () => {
    let startY; // will hold the starting Y position of the touch

    function handleTouchStart(event) {
        // store the starting Y position of the touch
        startY = event.touches[0].clientY;
    }

    function handleTouchEnd(event) {

        const endY = event.changedTouches[0].clientY; // ending Y position of the touch

        // calculate the distance moved
        const distance = startY - endY;

        // check if the user swiped up or down
        if (distance > 0) {
            // user swiped up
            document.getElementById('navHeader').classList.add('nav_header__scroll');
            document.getElementById('navMb').classList.remove('nav_links-group__active');
            setnavOpen(false)

        } else {
            // user swiped down
            document.getElementById('navHeader').classList.remove('nav_header__scroll');

        }
    }


    const [navOpen, setnavOpen] = useState(false)

    const activeNavMb = () => {
        if (!navOpen) {
            document.getElementById('navHeader').classList.add('nav_header__navOpen');
            document.getElementById('navMb').classList.add('nav_links-group__active');
            setnavOpen(!navOpen)
        } else {
            document.getElementById('navHeader').classList.remove('nav_header__navOpen');
            document.getElementById('navMb').classList.remove('nav_links-group__active');
            setnavOpen(!navOpen)
        }
    }
    return (
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='about'>
            <Nav activeNavMb={activeNavMb} />
            <div className='about_contaienr'>
            <p className='about_header'>About us</p>
            <p className='about_article'> AMS is a leading shipping company that provides
                reliable, sustainabli and safe services to businesses
                across the middle east, red sea, arabian gulf and east coast
                of africa.<br/><br/> Our fleet includes container, heavy lift, roro,
                rolo, tugs, passenger and crew boats.</p>
            </div>
        </div>
    )
}

export default About