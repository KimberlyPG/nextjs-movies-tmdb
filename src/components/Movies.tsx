import * as React from 'react'
import Carousel from 'react-multi-carousel';

import MovieAndTvCard from './MovieAndTv-card';

import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/carousel_responsive';
import { GetServerDataProps, PageProps } from 'gatsby';

const Movies = ({ nodes }:Queries.HomePageQuery["movies"])=> {
  return (
    <Carousel responsive={responsive} centerMode={true} >
        {nodes && nodes.map((item) => (
            <div className="h-full p-3">
              <MovieAndTvCard key = {item.id} data={item} />
            </div>
        ))}
    </Carousel>
  )
}

export default Movies;
