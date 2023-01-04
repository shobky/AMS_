import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import './videos.css'
import vid1 from '../../assets/videos/vid1.mp4'
import vid2 from '../../assets/videos/vid2.mp4'
import vid4 from '../../assets/videos/vid4.mp4'


const Videos = () => {
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
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='videos'>
            <Nav active={'videos'} activeNavMb={activeNavMb} />
            <div className='videos_container'>
                <h1 className='videos_header'>WATCH SOME VIDEOS</h1>
                <br />
                <div className='videos_vid-grid'>
                    <video className='videos_vid' controls src={vid1} />
                    <video className='videos_vid' controls src={vid2} />
                    <video className='videos_vid' controls src={vid4} />
                </div>

            </div>
        </div>
    )
}

export default Videos