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
    fullNameToggle: "",
    lastNameToggle: "",
    emailToggle: "",
    subjectToggle: "",
    messageToggle: "",
  });

  const handleFocus = (e) => {
    if (e.target.name === "fullName") {
      setState(() => ({
        ...state,
        fullNameToggle: "fullName",
      }));
    } else if (e.target.name === "lastName") {
      setState(() => ({
        ...state,
        lastNameToggle: "lastName",
      }));
    } else if (e.target.name === "email") {
      setState(() => ({
        ...state,
        emailToggle: "email",
      }));
    } else if (e.target.name === "subject") {
      setState(() => ({
        ...state,
        subjectToggle: "subject",
      }));
    } else if (e.target.name === "message") {
      setState(() => ({
        ...state,
        messageToggle: "message",
      }));
    }
  };

  const handleBlur = (e) => {
    setState(() => ({
      ...state,
      fullNameToggle: "",
      lastNameToggle: "",
      emailToggle: "",
      subjectToggle: "",
      messageToggle: "",
    }));
  };

  const handleChnage = (e) => {
    setState(() => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container">
        {/* form input item start here */}
        <div className="contact">
          <div className="circle"></div>
          <div className="form">
            <div className="titleContact">
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
                    onChange={handleChnage}
                    value={state.fullName}
                    placeholder={state.fullNameToggle === "" ? "FULL NAME" : ""}
                    className="mb-4 "
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.fullNameToggle === "fullName"
                        ? "labelFocus"
                        : "label"
                    }
                  >
                    full name
                  </label>
                </div>

                <div className="input-item">
                  <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChnage}
                    value={state.lastName}
                    id="name"
                    name="lastName"
                    type="text"
                    placeholder={state.lastNameToggle === "" ? "LAST NAME" : ""}
                    className="mb-4 "
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.lastNameToggle === "lastName"
                        ? "labelFocus"
                        : "label"
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
                    onChange={handleChnage}
                    value={state.email}
                    id="name"
                    name="email"
                    type="email"
                    placeholder={state.emailToggle === "" ? "E-MAIL" : ""}
                    className="mb-4 "
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.emailToggle === "email" ? "labelFocus" : "label"
                    }
                  >
                    e-mail
                  </label>
                </div>

                <div className="input-item right-side">
                  <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChnage}
                    value={state.subject}
                    id="name"
                    name="subject"
                    type="text"
                    placeholder={state.subjectToggle === "" ? "SUBJECT" : ""}
                    className="mb-4 "
                  />
                  <label
                    htmlFor="name"
                    className={
                      state.subjectToggle === "subject" ? "labelFocus" : "label"
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
                  onChange={handleChnage}
                  value={state.message}
                  name="message"
                  id="textarea"
                  placeholder={state.messageToggle === "" ? "MESSAGE" : ""}
                ></textarea>
                <label
                  htmlFor="textarea"
                  className={
                    state.messageToggle === "message"
                      ? "labelFocusMsg"
                      : "label-msg"
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

        {/* form input item ends here */}

        {/* Card item start from here */}
        <div className="row background ">
          <div className="col-lg-4 size">
            <div className="emails">
              <div className="cardHead">Or here</div>
              <div className="details">
                <h5>Email:</h5>

                <p>
                  <a href="mailto: abc@gmail.com">example@gmail.com</a>
                </p>

                <p>
                  <a href="mailto: abc@gmail.com">example@gmail.com</a>
                </p>
                <p>
                  <a href="mailto: abc@gmail.com">example@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 size">
            <div className="icons">
              <div className="cardHead">get social</div>
              <div className="row social">
                <div className="col-4">
                  <a href="#">
                    <svg
                      width="65"
                      height="67"
                      viewBox="0 0 65 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="zoom"
                    >
                      <path
                        d="M58.0357 0.6875H6.96429C3.11942 0.6875 0 3.83691 0 7.71875V59.2812C0 63.1631 3.11942 66.3125 6.96429 66.3125H58.0357C61.8806 66.3125 65 63.1631 65 59.2812V7.71875C65 3.83691 61.8806 0.6875 58.0357 0.6875ZM50.9408 23.9492C50.9699 24.3594 50.9699 24.7842 50.9699 25.1943C50.9699 37.8945 41.394 52.5283 23.8962 52.5283C18.4989 52.5283 13.4933 50.9463 9.28571 48.2217C10.0547 48.3096 10.7946 48.3389 11.5781 48.3389C16.0324 48.3389 20.1239 46.8154 23.3884 44.2373C19.2098 44.1494 15.6987 41.3809 14.4944 37.5723C15.9598 37.792 17.2801 37.792 18.7891 37.3965C14.4364 36.5029 11.1719 32.6357 11.1719 27.9629V27.8457C12.4342 28.5635 13.9141 29.0029 15.4665 29.0615C14.1613 28.185 13.0914 26.9959 12.3521 25.6003C11.6129 24.2047 11.2273 22.6461 11.2299 21.0635C11.2299 19.2764 11.6942 17.6357 12.5212 16.2148C17.2076 22.0449 24.2444 25.8535 32.1373 26.2637C30.7879 19.7451 35.6194 14.457 41.423 14.457C44.1652 14.457 46.6317 15.6143 48.3728 17.4893C50.5201 17.0791 52.5804 16.2734 54.4085 15.1748C53.6975 17.4014 52.2031 19.2764 50.2299 20.4629C52.1451 20.2578 54.0022 19.7158 55.7143 18.9688C54.423 20.8877 52.798 22.5869 50.9408 23.9492Z"
                        fill="#4278FF"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#">
                    <svg
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="zoom"
                    >
                      <path
                        d="M31.591 23.9991C30.1139 23.9996 28.6701 24.44 27.4422 25.2646C26.2143 26.0891 25.2574 27.2608 24.6926 28.6315C24.1277 30.0021 23.9802 31.5102 24.2687 32.9651C24.5572 34.4199 25.2688 35.7562 26.3134 36.805C27.3581 37.8537 28.689 38.5678 30.1377 38.857C31.5865 39.1462 33.0881 38.9975 34.4527 38.4297C35.8174 37.8619 36.9837 36.9005 37.8043 35.667C38.6249 34.4335 39.0628 32.9834 39.0628 31.5C39.0614 29.5106 38.2736 27.6031 36.8726 26.1967C35.4716 24.7902 33.572 23.9998 31.591 23.9991ZM49.0537 18.2334C48.6735 17.2657 48.0993 16.3868 47.3668 15.6511C46.6343 14.9155 45.7591 14.3389 44.7955 13.957C41.855 12.7913 34.8536 13.0528 31.591 13.0528C28.3284 13.0528 21.3341 12.7814 18.3851 13.957C17.4215 14.3389 16.5463 14.9155 15.8138 15.6511C15.0813 16.3868 14.5072 17.2657 14.1269 18.2334C12.9675 21.1866 13.2266 28.2248 13.2266 31.4986C13.2266 34.7723 12.9675 41.8022 14.1325 44.7652C14.5128 45.7329 15.0869 46.6118 15.8194 47.3474C16.5519 48.0831 17.4271 48.6597 18.3907 49.0416C21.3313 50.2073 28.3326 49.9458 31.5966 49.9458C34.8606 49.9458 41.8522 50.2172 44.8011 49.0416C45.7647 48.6597 46.6399 48.0831 47.3724 47.3474C48.1049 46.6118 48.6791 45.7329 49.0593 44.7652C50.2286 41.812 49.9597 34.7738 49.9597 31.5C49.9597 28.2262 50.2286 21.1978 49.0593 18.2348L49.0537 18.2334ZM31.591 43.0312C29.3201 43.0312 27.1001 42.355 25.2119 41.0879C23.3236 39.8208 21.8519 38.0199 20.9829 35.9128C20.1138 33.8058 19.8864 31.4872 20.3295 29.2504C20.7725 27.0135 21.8661 24.9588 23.4719 23.3462C25.0777 21.7335 27.1236 20.6353 29.351 20.1903C31.5783 19.7454 33.887 19.9737 35.9851 20.8465C38.0832 21.7193 39.8764 23.1973 41.1381 25.0936C42.3998 26.9899 43.0732 29.2193 43.0732 31.5C43.075 33.0148 42.7793 34.5151 42.2029 35.915C41.6265 37.3149 40.7808 38.5868 39.7143 39.658C38.6477 40.7291 37.3812 41.5784 35.9872 42.1573C34.5933 42.7361 33.0994 43.0331 31.591 43.0312ZM43.5465 22.1766C43.0164 22.1768 42.4981 22.0192 42.0571 21.7236C41.6162 21.4281 41.2725 21.0078 41.0694 20.516C40.8663 20.0242 40.8131 19.483 40.9163 18.9608C41.0196 18.4386 41.2747 17.9588 41.6495 17.5823C42.0242 17.2057 42.5018 16.9492 43.0217 16.8453C43.5416 16.7413 44.0806 16.7945 44.5704 16.9982C45.0602 17.2019 45.4789 17.5468 45.7734 17.9895C46.068 18.4322 46.2252 18.9526 46.2252 19.485C46.2267 19.8385 46.1586 20.1889 46.025 20.516C45.8913 20.8431 45.6947 21.1404 45.4463 21.391C45.198 21.6416 44.9028 21.8405 44.5777 21.9763C44.2527 22.112 43.9041 22.182 43.5521 22.1822L43.5465 22.1766ZM56.2357 0H6.94637C5.16378 0 3.4542 0.711159 2.19371 1.97703C0.93323 3.2429 0.225098 4.95979 0.225098 6.75L0.225098 56.25C0.225098 58.0402 0.93323 59.7571 2.19371 61.023C3.4542 62.2888 5.16378 63 6.94637 63H56.2357C58.0183 63 59.7279 62.2888 60.9884 61.023C62.2488 59.7571 62.957 58.0402 62.957 56.25V6.75C62.957 4.95979 62.2488 3.2429 60.9884 1.97703C59.7279 0.711159 58.0183 0 56.2357 0ZM53.8384 40.7812C53.6578 44.3855 52.8387 47.5791 50.2188 50.2031C47.5989 52.8272 44.4217 53.6667 40.837 53.8383C37.1389 54.0478 26.0516 54.0478 22.3535 53.8383C18.7646 53.6569 15.5958 52.8328 12.9717 50.2031C10.3476 47.5734 9.52286 44.3784 9.35203 40.7812C9.14338 37.0659 9.14338 25.9298 9.35203 22.2188C9.53266 18.6145 10.342 15.4209 12.9717 12.7969C15.6014 10.1728 18.7786 9.34313 22.3535 9.17156C26.0516 8.96203 37.1389 8.96203 40.837 9.17156C44.4259 9.35297 47.6045 10.177 50.2188 12.8067C52.833 15.4364 53.6676 18.6314 53.8384 22.2356C54.0471 25.9369 54.0471 37.0631 53.8384 40.7812Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="31.591"
                          y1="0"
                          x2="31.591"
                          y2="63"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#D11670" />
                          <stop offset="1" stop-color="#6117FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#">
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="zoom"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.91663 8.27747C2.91663 6.85569 3.48143 5.49214 4.48678 4.48678C5.49213 3.48143 6.85568 2.91663 8.27746 2.91663H61.7166C62.4212 2.91548 63.1191 3.05332 63.7704 3.32224C64.4216 3.59117 65.0134 3.98591 65.5119 4.48386C66.0104 4.98182 66.4058 5.5732 66.6755 6.22416C66.9451 6.87512 67.0837 7.57287 67.0833 8.27747V61.7166C67.0841 62.4214 66.9459 63.1193 66.6766 63.7706C66.4074 64.4219 66.0124 65.0137 65.5142 65.5121C65.016 66.0106 64.4244 66.4059 63.7733 66.6755C63.1222 66.9451 62.4243 67.0837 61.7195 67.0833H8.27746C7.57322 67.0833 6.87588 66.9445 6.22528 66.675C5.57469 66.4054 4.98358 66.0102 4.48575 65.5121C3.98791 65.014 3.59309 64.4227 3.32386 63.772C3.05462 63.1212 2.91624 62.4238 2.91663 61.7196V8.27747ZM28.315 27.3816H37.0037V31.745C38.2579 29.2366 41.4662 26.9791 46.2875 26.9791C55.5304 26.9791 57.7208 31.9754 57.7208 41.1425V58.1233H48.367V43.2308C48.367 38.01 47.1129 35.0641 43.9279 35.0641C39.5091 35.0641 37.6716 38.2404 37.6716 43.2308V58.1233H28.315V27.3816ZM12.2733 57.7237H21.63V26.9791H12.2733V57.7208V57.7237ZM22.9687 16.9516C22.9864 17.7528 22.8438 18.5493 22.5494 19.2946C22.255 20.0399 21.8147 20.7189 21.2544 21.2917C20.694 21.8646 20.0249 22.3197 19.2863 22.6304C18.5477 22.9411 17.7544 23.1012 16.9531 23.1012C16.1518 23.1012 15.3585 22.9411 14.6199 22.6304C13.8813 22.3197 13.2121 21.8646 12.6518 21.2917C12.0914 20.7189 11.6511 20.0399 11.3568 19.2946C11.0624 18.5493 10.9198 17.7528 10.9375 16.9516C10.9721 15.3791 11.6211 13.8827 12.7455 12.7828C13.8698 11.6829 15.3802 11.067 16.9531 11.067C18.526 11.067 20.0363 11.6829 21.1607 12.7828C22.2851 13.8827 22.9341 15.3791 22.9687 16.9516Z"
                        fill="#589BFF"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 size">
            <div className="page">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDailyProthomAlo%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
