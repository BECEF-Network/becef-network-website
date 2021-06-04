import React from "react";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [state, setState] = useState({
    fullName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFocus = (e) => {
    setState({
      [e.target.name]: e.target.name,
    });
  };

  const handleBlur = (e) => {
    setState({
      [e.target.name]: "",
    });
  };
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="circle"></div>
          <div className="form">
            <div className="title">
              <p>get in touch with us</p>
            </div>

            <div className="row input-one">
              <div className="col-md-6">
                <div className="input-item">
                  <input
                    id="name"
                    name="fullName"
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="FULL NAME"
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.fullName === "fullName" ? "labelFocus" : "label"
                    }
                  >
                    full name
                  </label>
                </div>

                <div className="input-item">
                  <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="name"
                    name="lastName"
                    type="text"
                    placeholder="LAST NAME"
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.lastName === "lastName" ? "labelFocus" : "label"
                    }
                  >
                    last name
                  </label>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="input-item right-side">
                  <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="name"
                    name="email"
                    type="email"
                    placeholder="E-MAIL"
                  />
                  <label
                    htmlFor="name"
                    className={state.email === "email" ? "labelFocus" : "label"}
                  >
                    e-mail
                  </label>
                </div>

                <div className="input-item right-side">
                  <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="name"
                    name="subject"
                    type="text"
                    placeholder="SUBJECT"
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.subject === "subject" ? "labelFocus" : "label"
                    }
                  >
                    subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row input-two">
              <div className="input-item">
                <textarea
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  name="message"
                  id="textarea"
                  placeholder="MESSAGE"
                ></textarea>
                <label
                  htmlFor="textarea"
                  className={
                    state.message === "message" ? "labelFocus" : "label-msg"
                  }
                >
                  Message
                </label>
              </div>
            </div>

            <div className="submit-btn">
              <button type="submit"> SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
