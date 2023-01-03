import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routeing from './Routes';
import './Global.css'
import './assets/fonts/fonts.css'
import Footer from './components/footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routeing />
            </AuthProvider>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)