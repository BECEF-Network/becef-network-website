// Import Fontawsome

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Slider2.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Slider2() {
  const sliders = [
    {
      class: "slider1 ",
      title: "This is Slider 1",
      dis: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
      image: "url(images/slider-badag.jpg),linear-gradient(black,black) ",
    },
    {
      class: "slider2 ",
      title: "This is Slider 2",
      dis: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
      image: "url('images/slider-badging.jpg')",
    },
    {
      class: "slider3 ",
      title: "This is Slider 3",
      dis: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
      image: "url('images/slider-scale.jpg')",
    },
    {
      class: "slider4 ",
      title: "This is Slider 4",
      dis: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
      image: "url('images/slider-scales.jpg')",
    },
  ];

  const slider = sliders.map((value, i) => {
    return (
      <SwiperSlide
        style={{ background: value.image }}
        className={value.class}
        key={i}
      >
        <div className="conatiner slider">
          <h1 className="slider-title">{value.title}</h1>
          <p
            className="slider-dis"
            style={{ textAlign: "left", maxWidth: "550px", width: "100%" }}
          >
            {value.dis}
          </p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className="Allslider">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slider}
      </Swiper>
    </section>
  );
}

export default Slider2;
