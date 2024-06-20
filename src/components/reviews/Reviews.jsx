import React, { useRef } from 'react'
import "./Reviews.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Reviews() {

    const slider = useRef()
    let tx = 0

    const slideBack = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='reviews' id='reviews'>
            <h2>Reviews</h2>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <p>"The Grilled Chicken Adobo Meal is absolutely amazing! The chicken was perfectly cooked and the Adobo sauce had just the right balance of savory and tangy. The portion size was generous and well worth the price. Definitely coming back for more!" - Jack</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"The Grilled Chicken Adobo Meal is absolutely amazing! The chicken was perfectly cooked and the Adobo sauce had just the right balance of savory and tangy. The portion size was generous and well worth the price. Definitely coming back for more!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"The Grilled Chicken Adobo Meal is absolutely amazing! The chicken was perfectly cooked and the Adobo sauce had just the right balance of savory and tangy. The portion size was generous and well worth the price. Definitely coming back for more!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"The Grilled Chicken Adobo Meal is absolutely amazing! The chicken was perfectly cooked and the Adobo sauce had just the right balance of savory and tangy. The portion size was generous and well worth the price. Definitely coming back for more!"</p>
                        </div>
                    </li>
                </ul>
                <IoIosArrowRoundBack className='back-btn' onClick={slideBack} />
                <IoIosArrowRoundForward className='next-btn' onClick={slideForward} />
            </div>
        </div>
    )
}

