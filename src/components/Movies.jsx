import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import MovieCard from './Movie-card';

import { responsive } from '../utils/carousel_responsive';

const Movies = ({ movie }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {movie && movie.map((item) => (
            <div className="h-full p-3">
            <MovieCard key={item.tmdbId} data={item} />
            </div>
        ))}
    </Carousel>
  )
}

export default Movies;
