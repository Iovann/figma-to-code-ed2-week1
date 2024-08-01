import React from 'react'
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <motion.div className='row mb-5'
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            layout // Ajout de `layout`
        >
            <div className="col-lg-7">
                <h1 className='mainTitle fw-normal neutral-600'>See the NFT new world</h1>
                <p className='w-75'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <p>
                    <span>Discover Vow</span>
                    <img src="/assets/icons/next_arrow.svg" alt="" className='img-fluid mx-3' width={48} height={48} />
                </p>
            </div>
            <div className="col-lg-5 heroImage">
                <div className="row pt-5">
                    <motion.div className="col-6"
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        layout // Ajout de `layout`
                    >
                        <p className='text-end'>
                            <img src="./assets/icons/crown.svg" alt="" className='img-fluid' width={157.44} height={116.49} /><br />
                        </p>
                        <img src="./assets/images/machine.webp" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' width={300} height={400} />
                    </motion.div>

                    <motion.div className="col-6"
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        layout // Ajout de `layout`
                    >
                        <img src="./assets/images/monkey.webp" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' width={300} height={400} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroSection
