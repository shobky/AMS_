import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'

const Routeing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />

        </Routes>
    )
}

export default Routeing