import React from 'react'
import './SmallPost.css'

function Small() {
    return (
        <div className="small-post my-4 my-lg-0">
            <div className="category1">

                <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.86768 3C1.86768 1.34315 3.21082 0 4.86768 0H23.7696C25.4264 0 26.7696 1.34315 26.7696 3V21.6087C26.7696 22.161 26.3219 22.6087 25.7696 22.6087H2.86768C2.31539 22.6087 1.86768 22.161 1.86768 21.6087V3Z" fill="black"/>
                <path d="M21.5429 8.67307L16.9121 8.06204L14.842 4.25179C14.7855 4.14747 14.6924 4.06302 14.5775 4.01168C14.2894 3.88252 13.9392 3.99016 13.7951 4.25179L11.725 8.06204L7.0942 8.67307C6.96653 8.68963 6.8498 8.74427 6.76043 8.82707C6.65238 8.92789 6.59285 9.06354 6.5949 9.20419C6.59695 9.34485 6.66042 9.47901 6.77137 9.5772L10.1218 12.5429L9.33026 16.7307C9.3117 16.8281 9.32357 16.9283 9.36454 17.0199C9.4055 17.1115 9.47391 17.1909 9.56202 17.249C9.65013 17.3071 9.7544 17.3416 9.86301 17.3486C9.97163 17.3557 10.0802 17.3349 10.1765 17.2888L14.3186 15.3116L18.4606 17.2888C18.5736 17.3434 18.705 17.3616 18.8308 17.3418C19.1482 17.2921 19.3616 17.0189 19.3068 16.7307L18.5153 12.5429L21.8657 9.5772C21.9569 9.49606 22.0171 9.39008 22.0354 9.27417C22.0846 8.98438 21.8621 8.71612 21.5429 8.67307Z" fill="#FFFBFB"/>
                <path d="M14.3186 28.826L26.7189 22.4674H1.91833L14.3186 28.826Z" fill="black"/>
                <line x1="2.20282" y1="32.5" x2="26.4343" y2="32.5" stroke="black"/>
                </svg>


                <h4 className="mb-4">Category 1</h4>
            </div>
            <div className="row post">
                    <div className="col-3">
                        <div className="post-thum" style={{backgroundColor:"black"}}>

                        </div>
                    </div>

                    <div className="col-9">
                        <div className="post-content">
                            <p>Economy</p>
                            <h5>The CEO of the ceylon chamber of commerce talks</h5>
                        </div>
                    </div> 
            </div>
            <div className="row post my-2">
                    <div className="col-3">
                        <div className="post-thum" style={{backgroundColor:"black"}}>

                        </div>
                    </div>

                    <div className="col-9">
                        <div className="post-content">
                            <p>Economy</p>
                            <h5>The CEO of the ceylon chamber of commerce talks</h5>
                        </div>
                    </div> 
            </div>
            <div className="row post my-2">
                    <div className="col-3">
                        <div className="post-thum" style={{backgroundColor:"black"}}>

                        </div>
                    </div>

                    <div className="col-9">
                        <div className="post-content">
                            <p>Economy</p>
                            <h5>The CEO of the ceylon chamber of commerce talks</h5>
                        </div>
                    </div> 
            </div>
        </div>
    )
}

export default Small
