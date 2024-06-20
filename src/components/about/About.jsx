import React from 'react'
import "./About.css"
import team from "../../assets/team.jpg"

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="col1">
                <img src={team} alt="Team img" />
            </div>
            <div className="col2">
                <h3>Bringing out our culture to life</h3>
                <p>Founded in 2017, Stix and Noodles started as a small eatery in Crystal Lake, Illinois, where we first introduced our fan-favorite Grilled Chicken Adobo Meal. In 2019, we expanded our business into a food truck and have been rapidly growing ever since. As a Filipino-owned business, we take pride in creating dishes that bring our heritage to life while incorporating modern culture in the Crystal Lake area.</p>
                <p>Stay up to date with our truck by following our <a href="https://www.facebook.com/stixandnoodles/" target='_blank'>Facebook</a> or give us a <a href="#footer">call</a> and we will have your order ready to be picked up.</p>
            </div>
        </div>
    )
}
