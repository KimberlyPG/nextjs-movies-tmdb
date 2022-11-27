import React from 'react'
import Carousel from 'react-multi-carousel';

import ShowCard from './ShowCard';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

/**
 * carousel with movies or series cards
 * @param {array} show movies or series data
 * @param {string} type movie or tv
 */

const MultiCarousel = ({ show, type }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {show && show.map((item) => (
            <div key={item.id} className="h-full sm:p-3 xs:p-1">
              <ShowCard item={item} type={type} page="home" />
            </div>
          )
          )}
    </Carousel>
  );
};

export default MultiCarousel;
