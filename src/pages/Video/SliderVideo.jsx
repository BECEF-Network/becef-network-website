
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import fontawsome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function SliderVideo({videos}) {
  
  return (
    <div className="container">
        <hr/>
        <Swiper loop={true} spaceBetween={30} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        "rotate": 40,
        "stretch": 0,
        "depth": 0,
        "modifier": 1,
        "slideShadows": true
      }} pagination={true} className="mySwiper slider-video">
                    {
                      videos.slice(9,15).map((video)=>{
                          return <SwiperSlide>
                                  <div style={{background:`linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${video.img}) center no-repeat`}} className="slider_video_post">
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