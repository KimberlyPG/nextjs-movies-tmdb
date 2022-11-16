import React, {useState, useEffect, useRef} from 'react'
import Carousel from 'react-multi-carousel';

import MovieAndTvCard from './MovieAndTv-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive_normal, responsive_large } from '../utils/carousel_responsive';

const Movies = ({ movie, type }) => {

  return (
    <Carousel responsive={type === 'normal'? responsive_normal: responsive_large} centerMode={true} >
        {movie && movie.map((item) => (
            <div className="h-full p-3">
              <MovieAndTvCard key={item.tmdbId} data={item} name={item.name} type='movie' />
            </div>
          )
          )}
    </Carousel>
  )
}


export default Movies;
