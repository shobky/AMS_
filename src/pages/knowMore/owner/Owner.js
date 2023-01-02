import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './owner.css'
import ownerImg from '../../../assets/owner2.jpg'
const Owner = () => {
  return (
    <div className='km_owner'>
      <Link className='km_owner_back-ico' to='/'><BiArrowBack /></Link>
      <h1 className='km_owner_header'>Ship Owner</h1>
      <article className='km_owner_article'>
        <div className='km_owner_flex'>
          <div>
            <p><span className='km_owner_arcl__bold'>AMS</span> is a leading shipping company that provides reliable,
              sustainable and safe services to businesses across the middle east,
              red sea, arabian gulf and east coast of africa. </p>
            <br />
            <p>Our fleet includes
              container, heavy lift, roro, rolo, tugs, passenger and crew boats.</p>
          </div>
          <img alt='pipes' className='kmk_owner_arcl_img' src={ownerImg} />
        </div>

      </article>
    </div>
  )
}

export default Owner