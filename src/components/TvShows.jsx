import React from 'react'
import Carousel from 'react-multi-carousel';

import MovieAndTvCard from './MovieAndTv-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const TvShows = ({ tv }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {tv && tv.map((item) => (
            <div className="h-full p-3">
              <MovieAndTvCard key={item.tmdbId} data={item} type='tv' />
            </div>
        ))}
    </Carousel>
  )
}

export default TvShows;
