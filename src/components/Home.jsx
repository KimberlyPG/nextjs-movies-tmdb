import * as React from "react"
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import { BsSearch } from "react-icons/bs";
import {  graphql,useStaticQuery } from "gatsby";
import 'react-multi-carousel/lib/styles.css';

import MovieCard from "./Movie-card";
import TVshowCard from "./TVshow-card";

import { responsive } from "../utils/carousel_responsive";

const Home = () => {
    const [moviesView, setMoviesView] = useState(true);
    const [moviesButtonBg, setMoviesButtonBg] = useState('#1B5BA9');
    const [showsButtonBg, setShowsButtonBg] = useState('transparent');
    const [moviesButtonColor, setMoviesButtonColor] = useState('#FFFFFF');
    const [showsButtonColor, setShowsButtonColor] = useState('#C2C8CD');
    const [movieName, setMovieName] = useState('');

    const toggle = (value) => {
      setMoviesView(value);
      if(value) {
        setMoviesButtonBg('#1B5BA9');
        setMoviesButtonColor('#FFFFFF');
        setShowsButtonBg('transparent');
        setShowsButtonColor('#C2C8CD');
      }
      else {
        setMoviesButtonBg('transparent');
        setMoviesButtonColor('#C2C8CD');
        setShowsButtonBg('#1B5BA9');
        setShowsButtonColor('#FFFFFF')
      }
    }
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

    const handleSubmit = (event) => {
      event.preventDefault();
      const searchMovie = async () => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.GATSBY_API_KEY}&query=${movieName}&page=1`)
        .then(res => res.json())
        .then(data => console.log("searchMovie",data))
      }
      searchMovie(); 
    }
         
    const handleChange = (event) => {
        event.preventDefault();
        setMovieName(event.target.value);
    }

    return (
      <div className="mx-12 mt-10">
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <input 
                    className="bg-gray-100 rounded text-gray-500 pl-3 w-96"
                    type="search"
                    onChange={handleChange} 
                    placeholder="Search a movie..."
                />
                <button type="submit" >
                  <BsSearch 
                    className="text-gray-400 ml-2 align-middle cursor-pointer hover:opacity-80"
                  />
                </button>
            </form>   
        </div>
        <div className="flex space-x-5 mb-10">
          <button className="text-gray-500 rounded-xl px-4" onClick={() => toggle(true)} style={{backgroundColor: `${moviesButtonBg}`, color: `${moviesButtonColor}`}}>Movies</button>
          <button className="text-gray-500 rounded-xl px-4" onClick={() => toggle(false)} style={{backgroundColor: `${showsButtonBg}`, color: `${showsButtonColor}`}}>Tv Shows</button>
        </div>
        {moviesView === true ? 
        (
        <>
          <h2 className="text-lg font-bold px-3">Top rated movies</h2>
          <Carousel responsive={responsive} centerMode={true} >
              {queryMoviesAndTv?.movies.nodes.map((item) => (
                <div className="h-full p-3">
                  <MovieCard key={item} data={item} />
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
                  <TVshowCard key={item} data={item} />
                </div>
              ))}
          </Carousel>
        </>
        )
        }
      </div>
    )
}

export default Home;