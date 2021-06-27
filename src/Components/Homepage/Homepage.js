import React from "react";
import "./Homepage.css";
import Category2 from "../Category2/Category2";
import Category3 from "./Category3/Category3";
import Category4 from "./Category4/Category4";

const Homepage = () => {
  return (
    <>

      <Category3 />
      
      <div className="container">
        <Category2 />
      </div>
      <Category4 />
      <div className="container">
        <Category2 />
      </div>
    </>
  );
};

export default Homepage;
