import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './parts.css'
import parts from '../../../assets/media/partShip.jfif'
import parts2 from '../../../assets/parts.jpeg'


const Parts = () => {
    return (
        <div className='km_parts'>
            <Link className='km_parts_back-ico' to='/'><BiArrowBack /></Link>
            <h1 className='km_parts_header'>Ship Parts</h1>
            <article className='km_parts_article'>
                <p><span className='km_parts_arcl__bold '> AMS </span> offers a wide range of products suitable for diesel
                    engines and marine auxiliary equipment made by well-known european
                    manufacturers. Our philosophy is to establish a long term relationship
                    with our clients, supporting them with all our experience and always
                    offering the optimal service and solution.
                    {
                        window.innerWidth > 800 &&
                    <img className='kmk_parts_arcl_img ' src={parts2} alt='crankshaft rta96' />
                    }
                    </p>
                <div>
                    <img className='kmk_parts_arcl_img ' src={parts} alt='crankshaft rta96' />
                    {
                        window.innerWidth < 800 &&
                    <img className='kmk_parts_arcl_img ' src={parts2} alt='crankshaft rta96' />
                    }
                </div>

            </article>
        </div>
    )
}

export default Parts