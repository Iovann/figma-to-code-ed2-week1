import React from 'react'

const Footer = () => {
    return (
        <div className='container pt-5 pb-3 ps-0'>
            <p><img src="/assets/icons/logo.svg" className='img-fluid' alt="Logo" width={36} height={35.39}/></p>
            <hr />
            <div className="row justify-content-between">
                <div className="col-lg-4 fw-bold text-center tesxt-lg-start pt-3">Create Explore & Collect Digital  NFTs</div>
                <div className="col-lg-4 text-center fw-semibold  pt-3">
                    <a href="https://www.linkedin.com/in/don-dy-iovann-atcho-81ab8a316/" className=' link-offset-2-hover text-black'>Build by Iovann ATCHO</a>
                </div>
                <div className="col-lg-4 d-flex justify-content-evenly pt-3">
                    <span>Privacy</span>
                    <span>Terms & Conditions</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
