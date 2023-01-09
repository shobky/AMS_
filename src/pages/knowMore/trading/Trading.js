import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../parts/parts.css'
import trading from '../../../assets/trading.jpeg'


const Trading = () => {
    return (
        <div className='km_parts'>
            <Link className='km_parts_back-ico' to='/'><BiArrowBack /></Link>
            <h1 className='km_parts_header'>Disel Trading</h1>
            <article className='km_parts_article'>
                <p> Ams as been engaged in the field of fuel supply in uae
                    since 2009, supplying diesel to renowned establishment as well
                    as prestigious projects. It has emerged as one of the reliable
                    fuel supplier with high quality diesel and fuel oil with utmost
                    customer care and holding absolute responsibility. We are equipped
                    with well maintained fuel supply fleet. We operate round the clock
                    and have highly experienced and responsible personnel to ensure best
                    and prompt service to our prestigious customers
                </p>
                <img className='kmk_parts_arcl_img ' src={trading} alt='crankshaft rta96' />
                <p>
                    ams is one of the premium importers and exporters of
                    petroleum products in the middle east. We excel and
                    are able to maintain a healthy client base as the company
                    imports products from highly dependable sources with several
                    years of trusted business relationships.
                </p>
            </article>
        </div>
    )
}

export default Trading