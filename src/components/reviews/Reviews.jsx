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
        if (tx > - 75) {
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
                            <p>"excellent food, presentation & flavors are absolutely delicious
                                very unique dishes & absolutely delicious!!!" - Linda</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"The people are awesome and their food is Soooo Good.  Thank you to the truck in the Woodstock square this evening." - Irene</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"Best dam food truck around 😋 I have to have the combo at least once a week, it’s delicious. literally can smell the food cooking a block away. so so good" - Joan</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <p>"Simple Filipino food that I grew up eating. Keep up the great work!" - Kane</p>
                        </div>
                    </li>
                </ul>
                <IoIosArrowRoundBack className='back-btn' onClick={slideBack} />
                <IoIosArrowRoundForward className='next-btn' onClick={slideForward} />
            </div>
        </div>
    )
}

