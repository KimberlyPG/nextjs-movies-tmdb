import { FC } from 'react';
import Carousel from 'react-multi-carousel';

import ShowCard from './ShowCard';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';
import { HomeMovies, HomeTv } from '../types/tmdb-types';
/**
 * carousel with movies or series cards
 * @param {array} show movies or series data
 * @param {string} type movie or tv
 */

type MultiCarouselProps = {
  show: HomeMovies[] | HomeTv[];
  type: string;
}

const MultiCarousel: FC<MultiCarouselProps> = ({ show, type }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {show && show.map((item: HomeMovies & HomeTv) => (
            <div key={item.id} className="h-full sm:p-3 xs:p-1">
              <ShowCard item={item} type={type} page="home" />
            </div>
          )
          )}
    </Carousel>
  );
};

export default MultiCarousel;
