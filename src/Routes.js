import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Auth from './auth/Auth'
import Loading from './components/loading/Loading'
import Pipes from './pages/knowMore/pipes/Pipes'
import Salvage from './pages/knowMore/Salvage'
const Home = React.lazy(() => import('./pages/home/Home'))

const Routeing = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Suspense fallback={<Loading/>}>
                    <Home/>
                </Suspense>
            } />
              <Route path='/auth' element={
                <Suspense fallback={<Loading/>}>
                    <Auth/>
                </Suspense>
            } />
             <Route path='/salvage' element={
                <Suspense fallback={<Loading/>}>
                    <Salvage/>
                </Suspense>
            } />
              <Route path='/tanks&pipes' element={
                <Suspense fallback={<Loading/>}>
                    <Pipes/>
                </Suspense>
            } />

        </Routes>
    )
}

export default Routeing