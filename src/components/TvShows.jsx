import React from 'react'
import Carousel from 'react-multi-carousel';

import TVshowCard from './TVshow-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const TvShows = ({ tv }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {tv && tv.map((item) => (
            <div className="h-full p-3">
            <TVshowCard key={item.tmdbId} data={item} />
            </div>
        ))}
    </Carousel>
  )
}

export default TvShows;
