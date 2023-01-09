import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../parts/parts.css'
import building from '../../../assets/building.jpeg'
import building2 from '../../../assets/building2.jpeg'


const Bulding = () => {
    return (
        <div className='km_parts'>
            <Link className='km_parts_back-ico' to='/'><BiArrowBack /></Link>
            <h1 className='km_parts_header'>Ship building</h1>
            <article className='km_parts_article'>
                <p>{`Our company specialized in building all types of ships
                    (steel - aluminum) and repair all types of ships, and harnesses all the capabilities to provide
                    the high quality, minimum time and best accurate according to the classification societies standard's
                    requirements.` }</p>
                <img className='kmk_parts_arcl_img ' src={building} alt='crankshaft rta96' />
                <p>
                    Our welder team have most of classification societies approval.
                </p>
                <img className='kmk_parts_arcl_img ' src={building2} alt='crankshaft rta96' />

            </article>
        </div>
    )
}

export default Bulding