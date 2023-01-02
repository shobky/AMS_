import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './pipes.css'
import pipesImg1 from '../../../assets//media/pipes234.jpg'
import pipesImgportrait from '../../../assets//media/pipes555.jpg'


const Pipes = () => {
    return (
        <div className='km_pipes'>
            <Link className='km_pipes_back-ico' to='/'><BiArrowBack /></Link>
            <h1 className='km_pipes_header'>Tanks and Pipes Building</h1>
            <article className='km_pipes_article'>
                <p><span className='km_pipes_arcl__bold'>AMS</span> is one of the main manufacturers of storage tanks, pressure vessels and vertical storage tanks for oil storage terminals in the uae and other countries</p>
                <div className='km_pipes_flex'>
                    <div className='km_pipes_article_sl'>
                        <img alt='pipes' className='kmk_pipes_arcl_img' src={pipesImg1} />
                        {
                            window.innerWidth < 800 &&
                            <p>As an engineering & fabrication partner withextensive  </p>
                        }
                    </div>
                    <div className='km_pipes_flex-section'>
                        <p className='km_pipes_flex-p'>{window.innerWidth > 800 && "As an engineering & fabrication partner withextensive"}knowledge of sea port terminals, tank farms, refineries,
                            loading and unloading stations, water facilities, chemical process storage facilitiesas well as with flexible
                            adaptable economical solutions, we can support your specific applicationsfor following industries: oil & gas,
                            chemical & petrochemical, water & waste water treatment, mining & construction, marine & offshore, industrial
                            process, pharmaceutical.</p>
                        <img alt='pipes' className='    kmk_pipes_arcl_img__portrait' src={pipesImgportrait} />
                    </div>
                </div>

            </article>

        </div>
    )
}

export default Pipes