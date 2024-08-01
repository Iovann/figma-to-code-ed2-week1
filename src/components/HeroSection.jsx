import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <motion.div className='row mb-5'
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="col-lg-7">
                <h1 className='mainTitle fw-normal neutral-600'>
                    <Typewriter
                        words={['See the NFT new world']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        delaySpeed={1000}
                    />
                </h1>
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
                    >
                        <img src="./assets/images/monkey.webp" alt="" className='rounded-top-pill rounded-bottom-pill img-fluid' width={280} height={380} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroSection;
