import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/sticks-logo.webp"

export default function Navbar() {
    const [menu, setMenu] = useState("home")
    // const location = useLocation()
    // const currentPath = location.pathname;


    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className="logo" />
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                {/* <Link to="/about" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>about</Link> */}
                {/* <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a> */}
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>reviews</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
                {/* <Link to="/" className={currentPath === "/" ? "active" : ""}>home</Link>
                <Link to="/" className={currentPath === "#explore-menu" ? "active" : ""}>menu</Link>
                <Link to="/about" className={currentPath === "/about" ? "active" : ""}>about</Link>
                <Link to="/" className={currentPath === "#app-download" ? "active" : ""}>mobile app</Link>
                <Link to="/" className={currentPath === "#footer" ? "active" : ""}>contact us</Link> */}
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="search icon" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}
