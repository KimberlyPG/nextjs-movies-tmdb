import * as React from "react"
import {  graphql,useStaticQuery } from "gatsby";

const Home = () => {
    
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
      // console.log("queryMovies", queryMovies.allTmdbMovieTopRated.nodes)
    return (
      <div className="mx-12 mt-10">
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500">Movies</button>
          <button className="text-gray-500">Tv Shows</button>
        </div>
        <h2 className="text-lg font-bold">Top rated movies</h2>
        <div className="grid grid-cols-8 gap-4">
             {queryMovies?.allTmdbMovieTopRated?.nodes.slice(0, 16).map((poster) => (
                <img 
                  className="w-48 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster.poster_path.original}`} 
                />
              ))}
        </div>
      </div>
    )
}

export default Home;