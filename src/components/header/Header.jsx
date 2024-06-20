import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className='header' id='header'>
            <div className="header-contents">
                <h2>Come eat your favorite Filipino food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of authentic Filipino dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="buttons">
                    <button>
                        <a href="#food-display">
                            View Menu
                        </a>
                    </button>
                    <button>
                        <a href="#footer">
                            Order Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
