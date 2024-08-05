import React from 'react';
import { motion } from 'framer-motion';

const SellCard = ({ image, cardTitle }) => {
  return (
      <motion.div
        className="card shadow-sm pt-3 px-2 neutralBackground border-0 rounded-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card-body">
          <p>
            <span className="bg-dark px-3 py-3 rounded-3 card-hover d-inline-block">
              <img
                src={image}
                alt={`${cardTitle} image`}
                width={30}
                height={30}
              />
            </span>
          </p>
          <h3 className="card-title fw-bold py-2 fs-5">{cardTitle}</h3>
          <p className="card-text mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </motion.div>
  );
};

export default SellCard;
