import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import ExploreMenu from './components/exploreMenu/ExploreMenu'
import AppDownload from './components/appDownload/AppDownload'

export default function App() {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    {/* <Route path='/about' element={<About />} />
                    <Route path="/menu" element={<ExploreMenu />} />
                    <Route path='/mobile-app' element={<AppDownload />} />
                    <Route path='/contact-us' element={<Footer />} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    )
}
