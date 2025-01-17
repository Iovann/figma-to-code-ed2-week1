import React from 'react';

const CardComponent = ({ image, cardTitle }) => {
    return (
        <div className="card card-collection">
            <div className="card-color">
                <img src={image} className="card-img-top img-fluid collectionImg object-fit-cover p-2 rounded-5" alt="Collection Image" width={258} height={213} />
                <div className="card-body">
                    <div className="card-text d-flex justify-content-between fw-semibold">
                        <h2 className="fw-bold fs-5">{cardTitle}</h2>
                        <span>
                            <img src="./assets/icons/ethereum.svg" alt="" className="img-fluid" width={24} height={24} /> 68
                        </span>
                    </div>
                    <button className="btn w-100 btn btn-light border border-1 border-black mt-3">Place a Bid</button>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
