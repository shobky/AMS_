import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import './home.css'
import { BsLink45Deg } from 'react-icons/bs'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import Carousel from '../../components/carousel/Caruosel'
import Footer from '../../components/footer/Footer'
const Home = () => {

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
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Nav activeNavMb={activeNavMb} active={'home'} />
            <Carousel />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
