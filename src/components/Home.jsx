import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client";

import Navbar from "./Navbar";
import Skeletons from "./Skeletons";
import MultiCarousel from "./MultiCarousel";

import 'react-multi-carousel/lib/styles.css';
import { POPULAR_MOVIES, NOWPLAYING_MOVIES, POPULAR_SHOWS, AIRING_TODAY_SHOWS } from "../tmdb/ApolloQueries";
import { showsData } from "../tmdb/showsData";

const Home = () => {
	const [moviesView, setMoviesView] = useState(true);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [topRatedTv, setTopRatedTv] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularTv, setPopularTv] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
	const [nowPlayingTv, setNowPlayingTv] = useState([]);

	const { loading: popularMoviesLoading, error: popularMoviesError, data: popularMoviesData } = useQuery(POPULAR_MOVIES);
	const { loading: popularShowsLoading, error: popularShowsError, data: popularShowsData } = useQuery(POPULAR_SHOWS);
	const { loading: nowPlayingMoviesLoading, error: nowPlayingMoviesError, data: nowPlayingMoviesData } = useQuery(NOWPLAYING_MOVIES);
	const { loading: airingTodayShowsLoading, error: airingTodayShowsError, data: airingTodayShowsData } = useQuery(AIRING_TODAY_SHOWS);

	useEffect(() => {
		showsData('movie', 'top_rated', setTopRatedMovies);
		showsData('tv', 'top_rated', setTopRatedTv);
		showsData('movie', 'popular', setPopularMovies);
		showsData('tv', 'popular', setPopularTv);
		showsData('movie', 'now_playing', setNowPlayingMovies)
		showsData('tv', 'airing_today', setNowPlayingTv)
	}, [])
	console.log("popular", popularTv)

    if (popularMoviesLoading || nowPlayingMoviesLoading || popularShowsLoading || airingTodayShowsLoading) return <Skeletons />
    // if (popularMoviesError || nowPlayingMoviesError || popularShowsError || airingTodayShowsError) return <div>Something went wrong...</div>;
    return (
		<>   
			<div className="2xl:mx-20 xl:mx-8 lg:mx-5 xs:mx-2 lg:mt-5 sm:mt-5">
				<Navbar setMoviesView={setMoviesView}/>
				{moviesView === true ? (
				<>
					<h2 className="text-lg font-bold px-3">Popular movies</h2>
					<MultiCarousel key="popularMovie" show={popularMovies?.results} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Top rated movies</h2>
					<MultiCarousel key="movieTop" show={topRatedMovies?.results} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Now playing movies</h2> 
					<MultiCarousel key="now" show={nowPlayingMovies?.results} type="movie" />
				</>
				):(
				<>
					<h2 className="text-lg font-bold px-3">TV shows airing today</h2>
					<MultiCarousel key="airing" show={nowPlayingTv?.results} type="tv" />
					<h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
					<MultiCarousel key="tvTop" show={topRatedTv?.results} type="tv" />
					<h2 className="text-lg font-bold px-3">Popular shows</h2>
					<MultiCarousel key="popularTv" show={popularTv?.results} type="tv" />
				</>
				)}
			</div>
		</>
    )
}

export default Home;
