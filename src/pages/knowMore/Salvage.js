import React from 'react'
import { Link } from 'react-router-dom'
import './salvage.css'
import { BiArrowBack } from 'react-icons/bi'
import IMbigGample from '../../assets/media/theBigGample.jpg'
import bigGampleArticle from '../../assets/media/bigGampleArticle.jpg'
import gna from '../../assets/media/gnaaden.jpg'
import bab from '../../assets/media/babaden.jpg'
import bab1 from '../../assets/salvageShips/bab.jpg'
import louisia from '../../assets/media/louisia.jpg'
import louisia1 from '../../assets/salvageShips/lousia (1).jpg'
import louisia2 from '../../assets/salvageShips/lousia (2).jpg'
import boats1 from '../../assets/salvageShips/boats (1).jpg'
import boats3 from '../../assets/salvageShips/boats (3).jpg'
import boats4 from '../../assets/salvageShips/boats (4).jpg'
import boats5 from '../../assets/salvageShips/boats (5).jpg'
import tugs1 from '../../assets/salvageShips/tugs (1).jpg'
import tugs6 from '../../assets/salvageShips/tugs (6).jpg'
import rig1 from '../../assets/salvageShips/rig (1).jpg'
import rig2 from '../../assets/salvageShips/rig.jpg'
import rig3 from '../../assets/salvageShips/rig (3).jpg'
import almasila from '../../assets/salvageShips/almasila.jpg'
import almasila1 from '../../assets/salvageShips/almasila (2).jpg'





const Salvage = () => {
    return (
        <div id='top' >
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
            </div>
            <div className='km_salbg_newpaper-div'>
                <img alt='the article from the newspaper' className='km_salvage_newspaper-img' src={bigGampleArticle} />
            </div>
            <h1 className='km_salvage_h1n2'>More ships salvaged by AMS</h1>
            <br />
            <br />
            <div className='moreShips_big-container'>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">RIG 105 Suez <span>2016</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={rig1} className="km_salvage_more-ships_img" />
                        <img alt='' src={rig2} className="km_salvage_more-ships_img" />
                        <img alt='' src={rig3} className="km_salvage_more-ships_img" />
                    </div>
                </div>

                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">LOUISA Sharjah UAE <span>2021</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={louisia1} className="km_salvage_more-ships_img" />
                        <img alt='' src={louisia} className="km_salvage_more-ships_img" />
                        <img alt='' src={louisia2} className="km_salvage_more-ships_img" />
                    </div>
                </div>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">BAB Aden Yamen <span>2018</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={bab} className="km_salvage_more-ships_img" />
                        <img alt='' src={bab1} className="km_salvage_more-ships_img" />
                    </div>
                </div>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">Boat sinks in Shajrah UAE <span>2020</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={boats4} className="km_salvage_more-ships_img" />
                        <img alt='' src={boats5} className="km_salvage_more-ships_img" />
                        <img alt='' src={boats1} className="km_salvage_more-ships_img" />
                        <img alt='' src={boats3} className="km_salvage_more-ships_img" />
                    </div>
                </div>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">Tugs in Aden Yamen <span>2018</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={tugs1} className="km_salvage_more-ships_img" />
                        <img alt='' src={tugs6} className="km_salvage_more-ships_img" />
                    </div>
                </div>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">ALMASILA Aden Yamen <span>2018</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={almasila} className="km_salvage_more-ships_img" />
                        <img alt='' src={almasila1} className="km_salvage_more-ships_img" />
                    </div>
                </div>
                <div className="km_salvage_more-ships">
                    <p className="km_salvage_more-ships_name">GNA Aden Yemen <span>2018</span></p>
                    <div className='km_salvage_more-ships_imgs'>
                        <img alt='' src={gna} className="km_salvage_more-ships_img-lonely" />
                    </div>
                </div>
                {/* <p className='km_salvage_more_adn-more'>And more <span>ALMASILA Aden Yamen 2018</span>, <span>Tugs in Adan Yamen</span>, <span>Boat sinks in Sharjah UAE</span>..</p> */}
            </div>
        </div>
    )
}

export default Salvage