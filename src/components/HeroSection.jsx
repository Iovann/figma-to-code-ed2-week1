import React from 'react'
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
        <motion.div className='row mb-5'
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="col-lg-7">
                <h1 className='mainTitle fw-normal neutral-600'>See the NFT new world</h1>
                <p className='w-75'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <p>
                    <span>Discover Vow</span>
                    <img src="/assets/icons/next_arrow.svg" alt="" className='img-gluid mx-3' />
                </p>
            </div>
            <div className="col-lg-5 heroImage">
                <div className="row pt-5">
                    <motion.div className="col-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <p className='text-end'>
                            <img src="./assets/icons/crown.svg" alt="" className='img-fluid' /><br />
                        </p>
                        <img src="./assets/images/machine.webp" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' />
                    </motion.div>

                    <div className="col-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img src="./assets/images/monkey.webp" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroSection
