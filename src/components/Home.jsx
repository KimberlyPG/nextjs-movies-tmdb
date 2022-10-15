import * as React from "react"
import { useState } from "react";
import {  graphql,useStaticQuery } from "gatsby";
import MovieCard from "./Movie-card";
import Shows from "./Shows";

const Home = () => {
    const [moviesView, setMoviesView] = useState(true);

    const toggle = () => setMoviesView(prewState => !prewState);
    console.log("moviesView", moviesView)

    const queryMovies =  useStaticQuery(graphql`
    query MyQuery {
      allTmdbMovieTopRated(sort: {fields: release_date, order: DESC}) {
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
    }    
    `);
      console.log("queryMovies", queryMovies.allTmdbMovieTopRated.nodes)
  
    return (
      <div className="mx-12 mt-10">
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500" onClick={toggle}>Movies</button>
          <button className="text-gray-500" onClick={toggle}>Tv Shows</button>
        </div>
        {moviesView === true ? 
        (
        <div>
          <h2 className="text-lg font-bold">Top rated movies</h2>
          <div className="grid grid-cols-8 gap-4">
              {queryMovies?.allTmdbMovieTopRated?.nodes.slice(0, 16).map((item) => (
                <div>
                  <MovieCard data={item}/>           
                  <Shows />     
                </div>
                ))}
          </div>
        </div>
        ):(
          <div>
            <h1>Tv shows</h1>
          </div>
        )
        }
      </div>
    )
}

export default Home;