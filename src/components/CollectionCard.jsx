import React from 'react';

const CardComponent = ({ image, cardTitle }) => {
    return (
        <div class="col-lg-3 col-md-6 col-9">
            <div class="card">
                <div class="card2">
                    <img src={image} class="card-img-top img-fluid collectionImg object-fit-cover p-2 rounded-5" alt="Collection Image" width={258} height={213}/>
                    <div class="card-body">
                        <div class="card-text d-flex justify-content-between fw-semibold">
                            <span class="fw-bold">{cardTitle}</span>
                            <span>
                                <img src="./assets/icons/ethereum.svg" alt="" class="img-fluid" width={24} height={24}/> 68
                            </span>
                        </div>
                        <button class="btn w-100 btn btn-light border border-1 border-black mt-3">Place a Bid</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardComponent;
