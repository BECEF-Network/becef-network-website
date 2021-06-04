import React from "react";
import "./Category2.css";

const Category2 = () => {
  return (
    <>
      <div className="mainDiv container">
        <div className="rectangle">
          <h5 className="category">Category 2</h5>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="item-1">
                <p>{new Date().toDateString()}</p>
                <h6>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, esse.
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="item-1 item-2">
                <p>{new Date().toDateString()}</p>
                <h6>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, esse.
                </h6>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item-1 item-3">
                <p>{new Date().toDateString()}</p>
                <h6>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta, esse.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category2;
