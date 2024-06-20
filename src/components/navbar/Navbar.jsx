import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/sticks-logo.webp"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menu, setMenu] = useState("home")
    const [showMobileNav, setShowMobileNav] = useState(false)
    // const location = useLocation()
    // const currentPath = location.pathname;

    const handleMobileNavClick = (link) => {
        setMenu(link)
        setShowMobileNav(prev => !prev)
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className="logo" />
            <ul className="navbar-menu">
                {/* <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link> */}
                <a href='#header' onClick={() => setMenu("header")} className={menu === "header" ? "active" : ""}>Home</a>
                <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
                <a href='#food-display' onClick={() => setMenu("food-display")} className={menu === "food-display" ? "active" : ""}>Menu</a>
                {/* <Link to="/about" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>about</Link> */}
                {/* <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a> */}
                <a href='#reviews' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Reviews</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
                {/* <Link to="/" className={currentPath === "/" ? "active" : ""}>home</Link>
                <Link to="/" className={currentPath === "#explore-menu" ? "active" : ""}>menu</Link>
                <Link to="/about" className={currentPath === "/about" ? "active" : ""}>about</Link>
                <Link to="/" className={currentPath === "#app-download" ? "active" : ""}>mobile app</Link>
                <Link to="/" className={currentPath === "#footer" ? "active" : ""}>contact us</Link> */}
            </ul>
            {/* <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="search icon" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div> */}
            <ul className={`mobile-navbar-menu ${showMobileNav ? "show" : ""}`}>
                <a href='#header' onClick={() => handleMobileNavClick("header")} className={menu === "header" ? "active" : ""}>Home</a>
                <a href='#about' onClick={() => handleMobileNavClick("about")} className={menu === "about" ? "active" : ""}>About</a>
                <a href='#food-display' onClick={() => handleMobileNavClick("food-display")} className={menu === "food-display" ? "active" : ""}>Menu</a>
                <a href='#reviews' onClick={() => handleMobileNavClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Reviews</a>
                <a href='#footer' onClick={() => handleMobileNavClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className="hamburger-container" >
                <RxHamburgerMenu className='hamburger' onClick={() => setShowMobileNav(prev => !prev)} />
            </div>
        </div>
    )
}
