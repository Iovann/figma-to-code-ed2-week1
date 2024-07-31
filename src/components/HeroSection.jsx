import React from 'react'

const HeroSection = () => {
    return (
        <div className='row mb-5'>
            <div className="col-lg-7 typewriter">
                <h1 className='mainTitle fw-normal neutral-600'>See the NFT new world</h1>
                <p className='w-75'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <p>
                    <span>Discover Vow</span>
                    <img src="/assets/icons/next_arrow.svg" alt="" className='img-gluid mx-3' />
                </p>
            </div>
            <div className="col-lg-5 heroImage">
                <div className="row pt-5">
                    <div className="col-6">
                        <p className='text-end'>
                            <img src="./assets/icons/crown.svg" alt="" className='img-fluid' /><br />
                        </p>
                        <img src="./assets/images/machine.png" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' />
                    </div>

                    <div className="col-6">
                        <img src="./assets/images/monkey.png" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
