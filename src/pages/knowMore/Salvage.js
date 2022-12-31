import React from 'react'
import { Link } from 'react-router-dom'
import './salvage.css'
import { BiArrowBack } from 'react-icons/bi'
import IMbigGample from '../../assets/media/theBigGample.jpg'
import bigGampleArticle from '../../assets/media/bigGampleArticle.jpg'



const Salvage = () => {
    return (
        <div className='km_salvage'>
            <Link className='km_salvage_back-ico' to='/'><BiArrowBack /></Link>
            <h1 className='km_salvage_header'>“Lucky Seven” moves out of Miramar,
                to return as Big Daddy casino in Jan </h1>
            <article className='km_salvage_article'>
                <div>
                    <p className='km_salvage_link'>Newton.Sequeira@timesgroup.com</p>

                    <p><span className='km_salvage_artcl__bold'>Panaji:</span> Three and a half months after MV Lucky Se ven broke away
                        from its an- chor to ground itself on Mi- ramar beach, the four-deck
                        offshore casino vessel was finally towed away and an- chored at Verem Bay.</p>
                    <br />
                    <p>Unfazed by the vessel's streak of bad luck, vessel ow- ner and former Haryana mi- nister Gopal Kanda said the
                        offshore casino, Big Daddy, would commence operations in January.</p>
                    <br />
                    <p>"Our casino will start operations by January. The main deck has sustained so- me damage because of the grounding
                        and the salvage operations and this has to be repaired. MV Lucky Seven will be the only casino which has been
                        designed to operate as a casino," Kanda said.</p>
                    <br />
                </div>

                <div>
                    <div>
                        <p className='km_salvage_artcl_img-header'> THE BIG GAMBLE</p>
                        <img alt='the ship refered to in the article' className='km_salvage_artcl_img' src={IMbigGample} />
                    </div>
                    <div className='km_salvage_after-photo'>
                        <p className='km_salvage_after-photo_p'><span className='km_salv_after-photo__red'>15 </span>member team of Egyptian salvage firm AMS Marine to assess damage
                            to the vessel, make it sea worthy to be taken to Jaigad port for complete repair, overhaul.</p>
                        <p className='km_salvage_after-photo_p'><span className='km_salv_after-photo__red'>25cr</span> Total cost for salvage ops and repairs .</p>
                        <p className='km_salvage_after-photo_p'><span className='km_salv_after-photo__red'>55cr</span> paid to state for licence renewal earlier dues</p>
                        <p className='km_salvage_after-photo_p'><span className='km_salv_after-photo__red'>1cr </span> Recurring fee being paid to state govt .</p>
                    </div>
                    <br />
                    <p>
                        The Tanzanian flag ves- sel built in 1997 is owned by Golden Globe Hotels Pri- vate Limited. It was refloated on Thursday morning and towed to her anchorage
                        at Verem by the 60-bollard pull tug AHTS Maria, along with support from three Total cost for salvage ops and repairs other tug vessels. Paid to state govt for
                        licence renewal, earlier dues With high tide hitting 2.11m and suitable weather conditions, four tugs were pressed into operations at 8:40am to drag MV Lucky
                        Se- ven to its anchoring spot. "Over the next two days, underwater surveys *lcr Recurring fee being paid to state govt will be carried out and whatever repairs
                        required for it to sail will be made. Then it will be taken to a dry dock at Jaigad port for complete repair and over- haul," Kanda said.
                    </p>
                </div>
            </article>
            <h2 className='km_salvage_header2'>Picture of the article</h2>
            <div className='km_salbg_newpaper-div'>
                <img alt='the article from the newspaper' className='km_salvage_newspaper-img' src={bigGampleArticle} />
            </div>
        </div>
    )
}

export default Salvage