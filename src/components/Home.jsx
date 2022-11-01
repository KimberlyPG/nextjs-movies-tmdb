import * as React from "react"
import { useState } from "react";
import {  graphql, useStaticQuery } from "gatsby";
import { useQuery, gql } from "@apollo/client";

import Navbar from "./Navbar";
import Movies from "./Movies";
import TvShows from "./TvShows";

const POPULAR_MOVIES = gql`
query{
  popularMovies{
      ok
    error
    movies {
      imdb_id
      adult
      homepage
      original_title
      overview
      poster_path
      release_date
      tagline
      vote_average
      vote_count
    }
  }
} 
`;

const POPULAR_SHOWS = gql`
query{
  popularShows{
      ok
    error
    shows {
      homepage
      name
      type
      original_name
      number_of_seasons
      number_of_episodes
      poster_path
      first_air_date
      original_language
      vote_count
    }
  }
}  
`

const Home = () => {
    const [moviesView, setMoviesView] = useState(true);

    const { loading: popularMoviesLoading, error: popularMoviesError, data: popularMoviesData } = useQuery(POPULAR_MOVIES);
    const { loading: popularShowsLoading, error: popularShowsError, data: popularShowsData } = useQuery(POPULAR_SHOWS);
   
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

    if (popularMoviesLoading || popularShowsLoading) return <div>Loading...</div>;
    if (popularMoviesError || popularShowsError) return <div>Error...</div>;
    return (
      <>   
        <div className="mx-12 mt-10">
          <Navbar setMoviesView={setMoviesView}/>
          {moviesView === true ? 
          (
          <>
            <h2 className="text-lg font-bold px-3">Top rated movies</h2>
            <Movies movie={queryMoviesAndTv.movies.nodes} />
            <h2 className="text-lg font-bold px-3">Popular movies</h2>
            <Movies movie={popularMoviesData.popularMovies.movies} />
          </>
          ):(
          <>
            <h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
            <TvShows tv={queryMoviesAndTv.tv.nodes} />
            <h2 className="text-lg font-bold px-3">Popular shows</h2>
            <TvShows tv={popularShowsData.popularShows.shows}/>
          </>
          )
          }
        </div>
      </>
    )
}

export default Home;