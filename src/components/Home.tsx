import * as React from "react"
import { useState } from "react";
import {  graphql, useStaticQuery } from "gatsby";

import Topbar from "./Topbar";
import Movies from "./Movies";
import TvShows from "./TvShows";

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
            <Movies movie={queryMoviesAndTv.movies.nodes}/>
            <h2 className="text-lg font-bold px-3">Popular movies</h2>
          </>
          ):(
          <>
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <TvShows tv={queryMoviesAndTv.tv.nodes} />
          </>
          )
          }
        </div>
      </>
    )
}

export default Home;