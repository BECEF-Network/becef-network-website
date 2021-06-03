import React from 'react'
import Blog from './Blogs/Blog'
import './Category1.css'


const Category1 = () => {
    return (
        <div className="siam-category1">
            <div className="siam-category1-title">
                <img src="/favicon.ico" className="siam-category1-icon" alt="" />
                <h2 className="siam-category1-h2">Category1</h2>
            </div>
            <div className="siam-category1-blogs">
                <Blog/>
                <Blog/>
                <Blog/>
            </div>
        </div>
    )
}
export default Category1;
