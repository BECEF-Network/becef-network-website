import React from "react";
import Category1 from "../Category1/Category1";
import HomeSlider from "../HomeSlider/HomeSlider";
import "./Homepage.css";
import Category2 from "../Category2/Category2";

const Homepage = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <HomeSlider />
        </div>
        <Category1 />
      </div>

      <div>
        <Category2 />
      </div>
    </>
  );
};

export default Homepage;
