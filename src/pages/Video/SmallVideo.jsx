import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

function SmallVideo({ videos }) {
    console.log(videos.img);
    return (
        <div className="container">
            <hr />
            <div className="row">
                <div className="col-lg-8">
                    {
                        videos.slice(6, 9).map((video) => {
                        return <div className="row">
                                    <div className="col-4 my-3">
                                        <div className="thumb_img">
                                            <img src={video.img} alt="" className="img-fluid w-100"/>
                                            <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                        </div>
                                    </div>
                                    <div className="col-8 my-3">
                                        <h4>{ video.title}</h4>
                                    </div>
                                </div>
                        })
                    }
                </div>
                {/* right sidebar */}
                <div className="col-lg-4">

                </div>
            </div>            
        </div>
    )
}

export default SmallVideo
