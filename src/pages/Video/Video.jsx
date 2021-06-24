import React, { useState } from 'react'
import BigVideo from './BigVideo'
import SmallVideo from './SmallVideo'
import './Video.css'

function Video() {
        let bigVideo = [
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img: "BigVideoPost/bg1.jpg"
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
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img: "BigVideoPost/bg1.jpg",
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg2.jpg"
            },
            {
                title: "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
                img:"BigVideoPost/bg3.jpg"
            }
        ]
        const [videos,setVideos]=useState(bigVideo)
    
    return (

        <main className="video_section">
            
                    {/* big video top  */}
                    <BigVideo videos={videos}></BigVideo>
                    {/* small video 2nd section */}
                    <SmallVideo videos={videos}></SmallVideo>

        </main>
    )
}

export default Video
