import React from 'react'
import logo from '../../assets/logo.png'
import './loading.css'

const Loading = () => {
  return (
    <div className='loading_container'>
        <img alt='logo' src={logo} className="loading_logo" />
        <p className='loading_txt'>Loading...</p>
    </div>
  )
}

export default Loading