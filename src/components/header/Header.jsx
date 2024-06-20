import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className='header' id='header'>
            <div className="header-contents">
                <h2>Come eat your favorite Filipino food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of authentic Filipino dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="buttons">
                    <a href="#food-display">
                        <button>
                            View Menu
                        </button>
                    </a>
                    <a href="#footer">
                        <button>
                            Order Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
