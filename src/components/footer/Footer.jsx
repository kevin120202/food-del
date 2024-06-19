import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import logo from "../../assets/sticks-logo.webp"

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt="logo" />
                    <p>Stix and Noodles is a charming Filipino food truck offering a delightful taste of the Philippines on wheels. We serve up savory skewers, hearty noodle dishes, and a variety of traditional favorites made with fresh, high-quality ingredients. Come savor the flavors of the Philippines, right in your neighborhood.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/stixandnoodles/" target='_blank'>
                            <img src={assets.facebook_icon} alt="facebook icon" />
                        </a>
                        <img src={assets.linkedin_icon} alt="linkedin icon" />
                        <img src={assets.twitter_icon} alt="twitter icon" />
                    </div>
                </div>
                <div className="footer-content-middle">
                    <h2>Sticks and Noodles</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>ORDER NOW</h2>
                    <ul>
                        <li>(312) 866-1456</li>
                        <li>stixandnoodles@gmail.com</li>
                        <li>1510 Industrial Drive D, Lake in the Hills, IL, United States, 60156</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2024 - Sticks and Noodles - All rights Reserved
            </p>
        </div>
    )
}
