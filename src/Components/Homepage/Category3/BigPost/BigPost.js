import React from 'react'
import './BigPost.css'

function BigPost() {
    return (
        <div className="big-post" style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../images/slider-badag.jpg') center no-repeat"}}>
            <div className="post-container">
                <p>Economy</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>April 20, 2021</p>
            </div>
        </div>
    )
}

export default BigPost
