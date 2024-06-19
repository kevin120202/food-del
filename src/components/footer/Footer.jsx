import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque iure quia dolores eum explicabo incidunt quisquam dolorum praesentium iusto earum placeat est veritatis nemo temporibus voluptate cum aliquam, assumenda facilis?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook icon" />
                        <img src={assets.linkedin_icon} alt="linkedin icon" />
                        <img src={assets.twitter_icon} alt="twitter icon" />
                    </div>
                </div>
                <div className="footer-content-middle">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>123-123-123</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2024 - All right Reserved
            </p>
        </div>
    )
}
