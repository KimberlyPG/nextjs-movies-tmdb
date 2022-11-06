import React from 'react'
import Carousel from 'react-multi-carousel';

import MovieAndTvCard from './MovieAndTv-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const Movies = ({ movie }) => {
  
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {movie && movie.map((item) => (
            <div className="h-full p-3">
              <MovieAndTvCard key={item.tmdbId} data={item} name={item.name} type='movie' />
            </div>
        ))}
    </Carousel>
  )
}

export default Movies;
