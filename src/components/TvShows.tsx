import React from 'react'
import Carousel from 'react-multi-carousel';

import MovieAndTvCard from './MovieAndTv-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const TvShows = ({ nodes }:Queries.HomePageQuery["tv"]) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {nodes && nodes.map((item:any) => (
            <div className="h-full p-3">
              <MovieAndTvCard key={item.tmdbId} data={item} />
            </div>
        ))}
    </Carousel>
  )
}

export default TvShows;
