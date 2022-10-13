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
      console.log("queryMovies", queryMovies.allTmdbMovieTopRated.nodes)
    return (
      <div className="mx-12 mt-10">
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500">Movies</button>
          <button className="text-gray-500">Tv Shows</button>
        </div>
        <h2 className="text-lg font-bold">Top rated movies</h2>
        <div className="grid grid-cols-8 gap-4">
             {queryMovies?.allTmdbMovieTopRated?.nodes.slice(0, 16).map((item) => (
              <div>
                <div className="relative hover:opacity-70 h-full">
                  <p className="text-xs text-green-600 absolute m-3 bg-gray-200 bg-opacity-300 p-2 rounded-full">{item.vote_average}</p>
                  <img 
                    className="h-full rounded-xl"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path.original}`} 
                  />
                </div>
                  {/* <p className="text-sm truncate">{item.title}</p> */}
              </div>
              ))}
        </div>
      </div>
    )
}

export default Home;