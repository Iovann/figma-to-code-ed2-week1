import React from 'react'

const CollectionCard = ({ image, cardTitle }) => {
    return (
        <div className="col-lg-3 col-md-6 col-9">
            <div className="card rounded-4">
                <img src={image} className="card-img-top img-fluid collectionImg object-fit-cover p-2 rounded-5" alt="Collection Image" />
                <div className="card-body">
                    <div className="card-text d-flex justify-content-between fw-semibold">
                        <span className='fw-bold'>{cardTitle}</span>
                        <span>
                            <img src="./assets/icons/ethereum.svg" alt="" className='img-fluid' /> 68
                        </span>
                    </div>
                    <button className='btn w-100 btn btn-light border border-1 border-black mt-3'>Place a Bid</button>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
