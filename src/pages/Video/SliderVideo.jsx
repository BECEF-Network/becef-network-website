
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import fontawsome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function SliderVideo({videos}) {
  
  console.log(videos.slice(9,15).map(video=>video.title));
  
  return (
    <div className="container">
        <hr/>
        <Swiper slidesPerView={'auto'} centeredSlides={true} loop={true} spaceBetween={30}     grabCursor={true} pagination={{
        "clickable": true
        }} className="mySwiper">
                    {
                        videos.slice(9,15).map((video)=>{
                            return <SwiperSlide>
                                    <div style={{background:`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${video.img}) center no-repeat`}} className="slider_video_post">
                                        <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                        <h5>{video.title }</h5>
                                    </div>
                                   </SwiperSlide>
                        })
                    }
        </Swiper>
    </div>
  )
}