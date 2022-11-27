import * as React from "react"
import { useState } from "react";
import {  graphql, useStaticQuery } from "gatsby";
import { useQuery } from "@apollo/client";

import Navbar from "./Navbar";
import Skeletons from "./Skeletons";
import MultiCarousel from "./MultiCarousel";

import 'react-multi-carousel/lib/styles.css';
import { POPULAR_MOVIES, NOWPLAYING_MOVIES, POPULAR_SHOWS, AIRING_TODAY_SHOWS } from "../tmdb/ApolloQueries";

/** 
* main page with information about movies and series 
*/

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
			id: tmdbId
			title: name  
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

    if (popularMoviesLoading || nowPlayingMoviesLoading || popularShowsLoading || airingTodayShowsLoading) return <Skeletons />
    if (popularMoviesError || nowPlayingMoviesError || popularShowsError || airingTodayShowsError) return <div>Something went wrong...</div>;
    return (
		<>   
			<div className="2xl:mx-20 xl:mx-8 lg:mx-5 xs:mx-2 lg:mt-5 sm:mt-5">
				<Navbar setMoviesView={setMoviesView}/>
				{moviesView === true ? (
				<>
					<h2 className="text-lg font-bold px-3">Popular movies</h2>
					<MultiCarousel key="popularMovie" show={popularMoviesData.popularMovies.movies} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Top rated movies</h2>
					<MultiCarousel key="movieTop" show={queryMoviesAndTv.movies.nodes} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Now playing movies</h2> 
					<MultiCarousel key="now" show={nowPlayingMoviesData.nowPlayingMovies.movies} type="movie" />
				</>
				):(
				<>
					<h2 className="text-lg font-bold px-3">TV shows airing today</h2>
					<MultiCarousel key="airing" show={airingTodayShowsData.airingTodayShows.shows} type="tv" />
					<h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
					<MultiCarousel key="tvTop" show={queryMoviesAndTv.tv.nodes} type="tv" />
					<h2 className="text-lg font-bold px-3">Popular shows</h2>
					<MultiCarousel key="popularTv" show={popularShowsData.popularShows.shows} type="tv" />
				</>
				)}
			</div>
		</>
    )
}

export default Home;
