import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Login from './auth/login/Login'
import Signup from './auth/login/Signup'
import E404 from './components/404/E404'
// import Auth from './auth/Auth'
import Loading from './components/loading/Loading'
import About from './pages/about/About'
import UserChangeProfile from './pages/edit profile/UserChangeProfile'
import Bulding from './pages/knowMore/building/Building'
import Parts from './pages/knowMore/parts/Parts'
import Trading from './pages/knowMore/trading/Trading'
import Videos from './pages/videos/Videos'
const Owner = React.lazy(() => import('./pages/knowMore/owner/Owner'))
const Home = React.lazy(() => import('./pages/home/Home'))
const Salvage = React.lazy(() => import('./pages/knowMore/Salvage'))
const Pipes = React.lazy(() => import('./pages/knowMore/pipes/Pipes'))


const Routeing = () => {
    return (
        <Routes>
            <Route path='*' element={<E404 />} />
            <Route path='/login' element={
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            } />
            <Route path='/signup' element={
                <Suspense fallback={<Loading />}>
                    <Signup />
                </Suspense>
            } />
            <Route path='/' element={
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            } />
            <Route path='/profile' element={
                <Suspense fallback={<Loading />}>
                    <UserChangeProfile />
                </Suspense>
            } />

            <Route path='/about' element={
                <Suspense fallback={<Loading />}>
                    <About />
                </Suspense>
            } />
             <Route path='/videos' element={
                <Suspense fallback={<Loading />}>
                    <Videos />
                </Suspense>
            } />
            <Route path='/salvage' element={
                <Suspense fallback={<Loading />}>
                    <Salvage />
                </Suspense>
            } />
             <Route path='/building' element={
                <Suspense fallback={<Loading />}>
                    <Bulding />
                </Suspense>
            } />
                  <Route path='/trading' element={
                <Suspense fallback={<Loading />}>
                    <Trading />
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
            <Route path='/parts' element={
                <Suspense fallback={<Loading />}>
                    <Parts />
                </Suspense>
            } />




        </Routes>
    )
}

export default Routeing