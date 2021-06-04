import React from 'react';
import './Category3.css'
import BigPost from './BigPost/BigPost'
import SmallPost from './SmallPost/SmallPost'

function Category3() {
    return (
        <section className="category-section3 my-5">
            <div className="container">
                <div className="row category3">
                    <div className="col-lg-6">
                        <BigPost/>
                    </div>

                    <div className="col-lg-6">
                        <SmallPost/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category3
