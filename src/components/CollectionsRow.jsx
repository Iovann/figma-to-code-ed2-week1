import React from 'react';
import CollectionCard from "./CollectionCard";
import { Collections } from '../common/data';
import AnimatedSection from './AnimateSection';
import CollectionHeader from './CollectionHeader';

const CollectionsRow = () => {
    return (
        <div>
            <p className="fw-bold fs-4">Our Collection</p>
            <CollectionHeader />
            <div className="row g-3 justify-content-lg-between justify-content-center pt-3 pb-5">
                {Collections.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-11 px-4 px-md-2" key={index}>
                        <AnimatedSection>
                            <CollectionCard image={item.image} cardTitle={item.cardTitle} />
                        </AnimatedSection>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CollectionsRow;
