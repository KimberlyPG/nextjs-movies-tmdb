import * as React from "react"
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  graphql, useStaticQuery } from "gatsby";

import MovieCard from "./Movie-card";
import TVshowCard from "./TVshow-card";
import Topbar from "./Topbar";

import { responsive } from "../utils/carousel_responsive";

const Home = () => {
    const [moviesView, setMoviesView] = useState(true);
   
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
      <>   
        <div className="mx-12 mt-10">
          <Topbar setMoviesView={setMoviesView}/>
          {moviesView === true ? 
          (
          <>
            <h2 className="text-lg font-bold px-3">Top rated movies</h2>
            <Carousel responsive={responsive} centerMode={true} >
                {queryMoviesAndTv?.movies.nodes.map((item) => (
                  <div className="h-full p-3">
                    <MovieCard key={item.id} data={item} />
                  </div>
                ))}
            </Carousel>
            <h2 className="text-lg font-bold px-3">Popular movies</h2>
          </>
          ):(
          <>
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <Carousel responsive={responsive} centerMode={true} >
                {queryMoviesAndTv?.tv.nodes.map((item) => (
                  <div className="h-full p-3">
                    <TVshowCard key={item.tmdbId} data={item} />
                  </div>
                ))}
            </Carousel>
          </>
          )
          }
        </div>
      </>
    )
}

export default Home;