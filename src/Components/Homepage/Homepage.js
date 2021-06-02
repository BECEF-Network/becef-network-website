import React from 'react'
import Category1 from '../Category1/Category1';
import HomeSlider from '../HomeSlider/HomeSlider'
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="home">
            <div className="container">
                <HomeSlider />
            </div>
            <Category1/>
        </div>
    )
}

export default Homepage;
