import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import './home.css'
import { BsLink45Deg } from 'react-icons/bs'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
const Home = () => {

    const [margin, setMargin] = useState(0)

    const handleCaroRight = () => {
        if (margin === -200) {
            const carousel = document.getElementById('carousel')
            carousel.style.marginLeft = `${0}vw`
            setMargin(0)
        } else {
            const carousel = document.getElementById('carousel')
            carousel.style.marginLeft = `${margin - 100}vw`
            setMargin(margin - 100)
        }

    }
    const handleCaroLeft = () => {
        if (margin === 0) {
            const carousel = document.getElementById('carousel')
            carousel.style.marginLeft = `${margin - 200}vw`
            setMargin(margin - 200)
        } else {
            const carousel = document.getElementById('carousel')
            carousel.style.marginLeft = `${margin + 100}vw`
            setMargin(margin + 100)
        }

    }

    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <Nav  active={'home'} />
            <div className='carousel_arrow'>
                <TfiArrowCircleLeft onClick={handleCaroLeft} className='carousel_ico' />
                <TfiArrowCircleRight onClick={handleCaroRight} className='carousel_ico' />

            </div>
            <div id='carousel' className='home_carousel'>
                <div className='home_section-1'>
                    <div className='home_section-1_content'>
                        <p className='home_s-1_head'>SHIP OWNER</p>
                        <article>
                            <p className='home_s1_article'>  Reliable, sustainable and safe services across the MIDDLE EAST, RED SEA, ARABIAN GULD AND COAST OF AFRICA</p>
                        </article>
                        <Link className='home_article_link'><BsLink45Deg />KNOW MORE</Link>
                        <p className='home_artice_bottom-txt'>our fleet includes containers, heavy lifts, roros, rolos, tugs, passsenger and crew boats</p>
                    </div>
                </div>
                <div className='home_section-2'>
                    <div className='home_section-1_content'>
                        <p className='home_s-1_head'>SHIP BUILDING</p>
                        <article>
                            <p className='home_s1_article'> We specialize in building & repairign all kinds of sihps. <br/> Approved by  the Classification Societies Stadndard's Requirements. </p>
                        </article>
                        <Link className='home_article_link'><BsLink45Deg />KNOW MORE</Link>
                        <p className='home_artice_bottom-txt'>Our welder team have most of classification societies approval.</p>
                    </div>
                </div>

                <div className='home_section-3'>
                    <div className='home_section-1_content'>
                        <p className='home_s-1_head'>SHIP SALVAGE</p>
                        <article>
                            <p className='home_s1_article'>  AMS is the process of rescuing a ship and it's cargo. <br/> We are always alert and for the rescue in all emergencies.</p>
                        </article>
                        <Link className='home_article_link'><BsLink45Deg />KNOW MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home