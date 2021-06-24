import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'


function BigVideo({videos}) {

    return (
        <div>
            <div className="row">
            <div className="col-md-8">
                {/* <div className="post"> */}
                    {
                        videos.slice(0,1).map((video,i) => {
                                return <div className="big-video-post" style={{background:`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${video.img}) center no-repeat`}}>
                                    <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                    <h1>{video.title}</h1>
                                </div> 
                        })
                    }
                {/* </div> */}
            </div>
            <div className="col-md-4 mh-100">
                <div className="row h-100">
                    {
                        videos.slice(1,3).map((video,i) => {
                            return <div className="col-lg-12 h-50 p-2">
                                        <div className="small-video-post h-100" style={{background:`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${video.img}) center no-repeat`}}>
                                            <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                            <h1>{video.title}</h1>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
        <div className="row post-4">
            {
                videos.slice(3,6).map((video,i) => {
                    return <div className="col-lg-4 p-2 py-3">
                                <div className="small-video-post2" style={{background:`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${video.img}) center no-repeat`}}>
                                    <span className="playIcon"><FontAwesomeIcon icon={faPlayCircle}/></span>
                                    <h1>{video.title}</h1>
                                </div> 
                            </div>
                })
            }
        </div>
        </div>
    )
}

export default BigVideo
