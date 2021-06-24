import React, { useState } from 'react'
import BigVideo from './BigVideo'
import './Video.css'

function Video() {
        let bigVideo = [
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img: "BigVideoPost/bg1.jpg",
                post:1
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg2.jpg"
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg3.jpg"
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img: "BigVideoPost/bg4.jpg",
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg5.jpg"
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg6.jpg"
            }
        ]
        const [videos,setVideos]=useState(bigVideo)
    
    return (

        <section className="video_section">
            
            <div className="container">
                    {/* big video top  */}
                    <BigVideo videos={videos}></BigVideo>
            </div>

        </section>
    )
}

export default Video
