import React from 'react'
import Carousel from 'react-multi-carousel';

import ShowCard from './ShowCard';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';

const TvShows = ({ tv }) => {
  
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {tv && tv.map((item) => (
            <div className="h-full sm:p-3 xs:p-1">
            <ShowCard key={item.id} item={item} type='tv' page='home' />
          </div>
        ))}
    </Carousel>
  )
}

export default TvShows;
