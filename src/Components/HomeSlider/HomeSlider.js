import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const HomeSlider = (props) => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: true,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/#">
          <IMG src="/images/slider-badag.jpg" alt="" />
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h5>
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <IMG src="/images/slider-badging.jpg" alt="" />
          <h2>
            Quos aperiam rerum cum! Nam unde eaque, id dolorem ullam ab sunt.
          </h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h5>
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <IMG src="/images/slider-scale.jpg" alt="" />
          <h2>Nam unde eaque, id dolorem ullam ab sunt.</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h5>
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <IMG src="/images/slider-scales.jpg" alt="" />
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          </h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h5>
        </a>
      </Wrap>
    </Carousel>
  );
};
const IMG = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: content;
`;
const Carousel = styled(Slider)`
  margin-top: 20px;
  color: white;
  & > button {
    opacity: 0.5;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li buttton {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    // overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  margin-right: 10rem;
  display: flex;
  h2 {
    position: absolute;
    padding: 10px;
    top: 8rem;
    text-align: center;
  }
  h5 {
    position: fixed;
    padding: 10px;
    top: 12rem;
    text-align: center;
    z-index: 1;
    display: inline-block;
    width: 600px;
    justify-content: center;
    vertical-align: middle;
  }
`;
export default HomeSlider;
