import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Login from './auth/login/Login'
import E404 from './components/404/E404'
// import Auth from './auth/Auth'
import Loading from './components/loading/Loading'
const Owner = React.lazy(() => import('./pages/knowMore/owner/Owner'))
const Home = React.lazy(() => import('./pages/home/Home'))
const Salvage = React.lazy(() => import('./pages/knowMore/Salvage'))
const Pipes = React.lazy(() => import('./pages/knowMore/pipes/Pipes'))


const Routeing = () => {
    return (
        <Routes>
            <Route path='*' element={<E404 />} />
            <Route path='/' element={
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            } />
            <Route path='/salvage' element={
                <Suspense fallback={<Loading />}>
                    <Salvage />
                </Suspense>
            } />
            <Route path='/tanks&pipes' element={
                <Suspense fallback={<Loading />}>
                    <Pipes />
                </Suspense>
            } />
            <Route path='/owner' element={
                <Suspense fallback={<Loading />}>
                    <Owner />
                </Suspense>
            } />
            <Route path='/login' element={
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            } />


        </Routes>
    )
}

export default Routeing