import React from 'react'
import Carousel from 'react-multi-carousel';

import ShowCard from './ShowCard';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const Movies = ({ movie }) => {

  return (
    <Carousel responsive={responsive} centerMode={true} >
        {movie && movie.map((item) => (
            <div className="h-full sm:p-3 xs:p-1">
              <ShowCard key={item.id} item={item} type='movie' page='home' />
            </div>
          )
          )}
    </Carousel>
  )
}


export default Movies;
