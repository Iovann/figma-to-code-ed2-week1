import React from 'react'

const CollectionHeader = () => {
    return (
        <div>
            <div className="d-flex justify-content-md-between fw-semibold align-items-end flex-wrap">
                <div className="d-flex align-items-end flex-wrap mb-3">
                    <button className="btn btn-dark px-lg-3 px-2 me-lg-2 me-1 mt-2 mt-md-2">All categories</button>
                    <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Art</button>
                    <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Celebrities</button>
                    <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Gaming</button>
                    <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Sport</button>
                    <p className="text-end text-decoration-underline link-offset-2-hover mx-2 d-md-none">View more</p>
                </div>
                <p className="text-end text-decoration-underline link-offset-2-hover d-none d-md-inline">View more</p>
            </div>
        </div>
    )
}

export default CollectionHeader
