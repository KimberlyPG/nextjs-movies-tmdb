import * as React from "react"
import { useState } from "react";
import {  graphql, useStaticQuery } from "gatsby";
import { useQuery } from "@apollo/client";

import Navbar from "./Navbar";
import Movies from "./Movies";
import TvShows from "./TvShows";

import { POPULAR_MOVIES, POPULAR_SHOWS, NOWPLAYING_MOVIES } from "../api/apollo_queries";

const Home = () => {
  const [moviesView, setMoviesView] = useState(true);
  
  const { loading: popularMoviesLoading, error: popularMoviesError, data: popularMoviesData } = useQuery(POPULAR_MOVIES);
  const { loading: popularShowsLoading, error: popularShowsError, data: popularShowsData } = useQuery(POPULAR_SHOWS);
  const {data: nowPlayingMoviesData} = useQuery(NOWPLAYING_MOVIES);

  const queryMoviesAndTv =  useStaticQuery(graphql`
    query MyQuery {
      movies: allTmdbMovieTopRated(sort: {fields: release_date, order: DESC}) {
        nodes {
          id: tmdbId
          name: title
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
            id: tmdbId
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

    if (popularMoviesLoading || popularShowsLoading) return <div>Loading...</div>;
    if (popularMoviesError || popularShowsError) return <div>Error...</div>;
    return (
      <>   
        <div className="mx-20 mt-10">
          <Navbar setMoviesView={setMoviesView}/>
          {moviesView === true ? 
          (
          <>
            <h2 className="text-lg font-bold px-3">Top rated movies</h2>
            <Movies movie={queryMoviesAndTv.movies.nodes} type='normal' />
            <h2 className="text-lg font-bold px-3">Popular movies</h2>
            <Movies movie={popularMoviesData.popularMovies.movies} type='normal' />
            <h2 className="text-lg font-bold px-3">Now playing movies</h2>
            <Movies movie={nowPlayingMoviesData?.nowPlayingMovies?.movies} type='large'/>
          </>
          ):(
          <>
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <TvShows tv={queryMoviesAndTv.tv.nodes} type='normal' />
            <h2 className="text-lg font-bold px-3">Popular shows</h2>
            <TvShows tv={popularShowsData.popularShows.shows} type='normal' />
          </>
          )
          }
        </div>
      </>
    )
}

export default Home;