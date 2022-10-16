import * as React from "react"
import { useState } from "react";
import {  graphql,useStaticQuery } from "gatsby";

import MovieCard from "./Movie-card";
import TVshowCard from "./Tvshow-card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    const [moviesView, setMoviesView] = useState(true);

    const toggle = (value) => setMoviesView(value);
    console.log("moviesView", moviesView)

    const queryMoviesAndTv =  useStaticQuery(graphql`
    query MyQuery {
      movies: allTmdbMovieTopRated(sort: {fields: release_date, order: DESC}) {
        nodes {
          id
          title
          release_date
          poster_path {
            original
          }
          adult
          popularity
          overview
          vote_average
          genre_ids
        }
      }
      tv: allTmdbTvTopRated {
        nodes {
            tmdbId
            name  
            first_air_date
            poster_path {
            original
            }
            popularity
            overview
            vote_average     
            genre_ids
        }
        }
    }    
    `);

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
        slidesToSlide:10
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
        slidesToSlide:10
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide:10
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide:10
      }
    };

    return (
      <div className="mx-12 mt-10">
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500" onClick={() => toggle(true)}>Movies</button>
          <button className="text-gray-500" onClick={() => toggle(false)}>Tv Shows</button>
        </div>
        {moviesView === true ? 
        (
        <div>
          <h2 className="text-lg font-bold">Top rated movies</h2>
          <div className="grid grid-cols-8 gap-4">
              {queryMoviesAndTv?.movies.nodes.slice(0, 16).map((item) => (
                <div className="space-x-5">
                  <MovieCard data={item} />           
                </div>
                ))}
          </div>
        </div>
        ):(
          <>
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <Carousel responsive={responsive} >
                {queryMoviesAndTv?.tv.nodes.map((item) => (
                  <div className="p-3">
                    <TVshowCard data={item} />
                    <p className="text-sm truncate">{item.title}</p>
                  </div>
                ))}
            </Carousel>
            <h2 className="text-lg font-bold px-3">Popular shows</h2>
          </>
        )
        }
      </div>
    )
}

export default Home;