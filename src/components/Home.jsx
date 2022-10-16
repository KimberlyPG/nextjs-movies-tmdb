import * as React from "react"
import { useState } from "react";
import {  graphql,useStaticQuery } from "gatsby";

import MovieCard from "./Movie-card";
import TVshowCard from "./Tvshow-card";

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
        <div>
          <h2 className="text-lg font-bold">Top rated movies</h2>
          <div className="grid grid-cols-8 gap-4">
              {queryMoviesAndTv?.movies.nodes.slice(0, 16).map((item) => (
                <div>
                  <MovieCard data={item} />           
                </div>
                ))}
          </div>
        </div>
        ):(
          <div>
            <h2 className="text-lg font-bold">Top rated tv shows</h2>
            <div className="grid grid-cols-8 gap-4">
                {queryMoviesAndTv?.tv.nodes.slice(0, 16).map((item) => (
                    <TVshowCard data={item} />
                  ))}
            </div>
          </div>
        )
        }
      </div>
    )
}

export default Home;