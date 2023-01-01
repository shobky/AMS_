import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
// import Auth from './auth/Auth'
import Loading from './components/loading/Loading'
const Home = React.lazy(() => import('./pages/home/Home'))
const Salvage = React.lazy(() => import('./pages/knowMore/Salvage'))
const Pipes = React.lazy(() => import('./pages/knowMore/pipes/Pipes'))


const Routeing = () => {
    return (
        <Routes>
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
            {/* <Route path='/auth' element={
                <Suspense fallback={<Loading />}>
                    <Auth />
                </Suspense>
            } /> */}


        </Routes>
    )
}

export default Routeing