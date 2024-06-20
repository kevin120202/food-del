import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'
import Reviews from '../../components/reviews/Reviews'
import About from '../../components/about/About'

export default function Home() {
    const [category, setCategory] = useState("all")

    return (
        <div>
            <Header />
            <About />
            {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
            <FoodDisplay category={category} />
            {/* <AppDownload /> */}
            <Reviews />
        </div>
    )
}
