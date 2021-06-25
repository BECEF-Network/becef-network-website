import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

function SmallVideo2({ videos }) {
        
    return (
        <div className="container">
            <hr />
            <div className="row">
                {
                    videos.slice(15, 21).map((video) => {
                        return <div className="col-md-6 col-lg-4">
                                <div className="small_video_post2">
                                    <div className="thumb-img">
                                    <img src={video.img} alt="" className="img-fluid w-100" />
                                    <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                    </div>
                                    <h4>{video.title}</h4>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default SmallVideo2
