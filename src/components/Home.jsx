import * as React from "react"
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import {  graphql,useStaticQuery } from "gatsby";
import 'react-multi-carousel/lib/styles.css';

import MovieCard from "./Movie-card";
import TVshowCard from "./Tvshow-card";

import { responsive } from "../utils/carousel_responsive";

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

    return (
      <div className="mx-12 mt-10">
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500" onClick={() => toggle(true)}>Movies</button>
          <button className="text-gray-500" onClick={() => toggle(false)}>Tv Shows</button>
        </div>
        {moviesView === true ? 
        (
        <>
          <h2 className="text-lg font-bold px-3">Top rated movies</h2>
          <Carousel responsive={responsive} >
              {queryMoviesAndTv?.movies.nodes.map((item) => (
                <div className="h-full p-3">
                  <MovieCard data={item} />
                </div>
              ))}
          </Carousel>
        </>
        ):(
        <>
          <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
          <Carousel responsive={responsive} >
              {queryMoviesAndTv?.tv.nodes.map((item) => (
                <div className="h-full p-3">
                  <TVshowCard data={item} />
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