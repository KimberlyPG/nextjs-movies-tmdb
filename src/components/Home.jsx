import * as React from "react"
import { useState } from "react";
import {  graphql, useStaticQuery } from "gatsby";
import { useQuery } from "@apollo/client";

import Navbar from "./Navbar";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Skeletons from "./Skeletons";

import 'react-multi-carousel/lib/styles.css';
import { POPULAR_MOVIES, NOWPLAYING_MOVIES, POPULAR_SHOWS, AIRING_TODAY_SHOWS } from "../tmdb/apollo_queries";

const Home = () => {
  const [moviesView, setMoviesView] = useState(true);

  const { loading: popularMoviesLoading, error: popularMoviesError, data: popularMoviesData } = useQuery(POPULAR_MOVIES);
  const { loading: popularShowsLoading, error: popularShowsError, data: popularShowsData } = useQuery(POPULAR_SHOWS);
  const { loading: nowPlayingMoviesLoading, error: nowPlayingMoviesError, data: nowPlayingMoviesData } = useQuery(NOWPLAYING_MOVIES);
  const { loading: airingTodayShowsLoading, error: airingTodayShowsError, data: airingTodayShowsData } = useQuery(AIRING_TODAY_SHOWS);
  
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
      console.log("pl", popularMoviesLoading)
    if (popularMoviesLoading || popularShowsLoading || nowPlayingMoviesLoading) 
    return (
      <Skeletons />
    )
    
    // if (popularMoviesError || popularShowsError || nowPlayingMoviesError) return;
    return (
      <>   
        <div className="2xl:mx-20 xl:mx-8 lg:mx-5 xs:mx-2 lg:mt-5 sm:mt-5">
          <Navbar setMoviesView={setMoviesView}/>
          {moviesView === true ? 
          (
          <>
            <h2 className="text-lg font-bold px-3">Popular movies</h2>
            <Movies movie={popularMoviesData.popularMovies.movies} />
            <h2 className="text-lg font-bold px-3 mt-5">Top rated movies</h2>
            <Movies movie={queryMoviesAndTv.movies.nodes} />
            <h2 className="text-lg font-bold px-3 mt-5">Now playing movies</h2> 
            <Movies movie={nowPlayingMoviesData.nowPlayingMovies.movies} />
          </>
          ):(
          <>
            <h2 className="text-lg font-bold px-3">TV shows airing today</h2>
            <TvShows tv={airingTodayShowsData.airingTodayShows.shows} />
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <TvShows tv={queryMoviesAndTv.tv.nodes} />
            <h2 className="text-lg font-bold px-3">Popular shows</h2>
            <TvShows tv={popularShowsData.popularShows.shows} />
          </>
          )
          }
        </div>
      </>
    )
}

export default Home;