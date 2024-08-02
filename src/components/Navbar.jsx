import React from "react";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-3 mb-lg-5 shadow-none navbar-before-scroll py-3">
                <div className="container">
                    <a className="navbar-brand align-items-center" href='#'>
                        <img src="/assets/icons/logo.svg" className='img-fluid' alt="Logo" width={36} height={35.39} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src="./assets/icons/menu.svg" alt="Menu" width={20} height={20} />
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header d-lg-none d-flex justify-content-end">
                            <button className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src="./assets/icons/close_button.svg" alt="Close" width={20} height={20} />
                            </button>
                        </div>
                        <div className="offcanvas-body d-lg-flex justify-content-between align-items-center">
                            <ul className="navbar-nav justify-content-end  pe-3 fw-semibold mx-auto">
                                <li className="nav-item mx-3 cursor my-2 my-lg-0 active">Home</li>
                                <li className="nav-item mx-3 cursor my-2 my-lg-0">Top sales</li>
                                <li className="nav-item mx-3 cursor my-2 my-lg-0">Collections</li>
                                <li className="nav-item mx-3 cursor my-2 my-lg-0">Our blog</li>
                                <li className="nav-item mx-3 cursor my-2 my-lg-0">About us</li>
                            </ul>
                            <div className='d-flex justify-content-lg-between'>
                                <button className='btn btn-light px-3 rounded-pill fw-bold'>Sign in</button>
                                <span className='border-end border-2 border-black mx-3'></span>
                                <button className='btn btn-dark rounded-pill px-3'>Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
