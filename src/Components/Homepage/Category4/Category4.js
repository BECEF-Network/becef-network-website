import React from 'react'
import BigPost from '../Category3/BigPost/BigPost'
import SmallPost from '../Category3/SmallPost/SmallPost'


function Category4() {
    return (
        <section className="category-section4 my-5">
            <div className="container">
                <div className="row category3">
                    <div className="col-lg-6">
                        <SmallPost/>
                    </div>

                    <div className="col-lg-6">
                        <BigPost/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category4
