import React from 'react'
import { Sell } from "../common/data"
import SellCard from './SellCard';
import AnimatedSection from "./AnimateSection";

const SellRow = () => {
    return (
        <div>
            <p className="fw-bold fs-4 pb-4">Create and Sell Now</p>
            <div className="row g-3 justify-content-lg-between justify-content-center pt-3 pb-5">
                {Sell.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-11 mb-4">
                        <AnimatedSection>
                            <SellCard key={index} image={item.image} cardTitle={item.cardTitle} />
                        </AnimatedSection>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SellRow
