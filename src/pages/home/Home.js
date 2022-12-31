import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import './home.css'
import { BsLink45Deg } from 'react-icons/bs'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import Carousel from '../../components/carousel/Caruosel'
import Footer from '../../components/footer/Footer'
const Home = () => {


    return (
        <div>
            <Nav active={'home'} />
            <Carousel />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
