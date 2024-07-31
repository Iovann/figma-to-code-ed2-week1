import { useState } from 'react';

const Navbar = () => {
    const [menuStatus, setMenuStatus] = useState(true);

    const handleClick = () => {
        setMenuStatus(prevStatus => !prevStatus);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-5 shadow-none navbar-before-scroll">
                <div className="container">
                    <a className="navbar-brand align-items-center">
                        <img src="/assets/icons/logo.svg" className='img-fluid' alt="Logo" />
                    </a>
                    <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            menuStatus ? <span className=""><img src="./assets/icons/menu.svg" alt="Menu" /></span> : <span className=""><img src="./assets/icons/close_button.svg" alt="Close" /></span>
                        }
                    </button>
                    <div className="collapse navbar-collapse justify-content-between fw-semibold" id="navbar">
                        <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item mx-2 my-2 my-lg-0 active">Home</li>
                            <li className="nav-item mx-2 my-2 my-lg-0">Top sales</li>
                            <li className="nav-item mx-2 my-2 my-lg-0">Collections</li>
                            <li className="nav-item mx-2 my-2 my-lg-0">Our blog</li>
                            <li className="nav-item mx-2 my-2 my-lg-0">About us</li>
                        </ul>
                        <div className='d-flex justify-content-lg-between'>
                            <button className='btn btn-light px-3 rounded-pill fw-bold'>Sign in</button>
                            <span className='border-end border-2 border-black mx-3'></span>
                            <button className='btn btn-dark rounded-pill px-3'>Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
