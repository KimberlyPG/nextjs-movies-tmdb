import {FC, useEffect, useState } from "react"

import Navbar from "./Navbar";
import Skeletons from "./Skeletons";
import MultiCarousel from "./MultiCarousel";

import 'react-multi-carousel/lib/styles.css';
import { showsData } from "../tmdb/showsData";
import { HomeMovies, HomeTv } from "../types/tmdb-types";

const Shows: FC = () => {
	const [moviesView, setMoviesView] = useState<boolean>(true);
	const [topRatedMovies, setTopRatedMovies] = useState<HomeMovies[]>([]);
	const [topRatedTv, setTopRatedTv] = useState<HomeTv[]>([]);
	const [popularMovies, setPopularMovies] = useState<HomeMovies[]>([]);
	const [popularTv, setPopularTv] = useState<HomeTv[]>([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState<HomeMovies[]>([]);
	const [nowPlayingTv, setNowPlayingTv] = useState<HomeTv[]>([]);([]);
	const [status, setStatus] = useState<boolean | string>(true);

	useEffect(() => {
		showsData('movie', 'top_rated', setTopRatedMovies, setStatus);
		showsData('tv', 'top_rated', setTopRatedTv, setStatus);
		showsData('movie', 'popular', setPopularMovies, setStatus);
		showsData('tv', 'popular', setPopularTv, setStatus);
		showsData('movie', 'now_playing', setNowPlayingMovies, setStatus)
		showsData('tv', 'airing_today', setNowPlayingTv, setStatus)
	}, [])

    if (status === 'loading') return <Skeletons />
    return (
		<>   
			<div className="2xl:mx-20 xl:mx-8 lg:mx-5 xs:mx-2 lg:mt-5 sm:mt-5">
				<Navbar setMoviesView={setMoviesView}/>
				{moviesView === true ? (
				<>
					<h2 className="text-lg font-bold px-3">Popular movies</h2>
					<MultiCarousel key="popularMovie" show={popularMovies} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Top rated movies</h2>
					<MultiCarousel key="movieTop" show={topRatedMovies} type="movie" />
					<h2 className="text-lg font-bold px-3 mt-5">Now playing movies</h2> 
					<MultiCarousel key="now" show={nowPlayingMovies} type="movie" />
				</>
				):(
				<>
					<h2 className="text-lg font-bold px-3">TV shows airing today</h2>
					<MultiCarousel key="airing" show={nowPlayingTv} type="tv" />
					<h2 className="text-lg font-bold px-3">Top rated tv shows</h2>
					<MultiCarousel key="tvTop" show={topRatedTv} type="tv" />
					<h2 className="text-lg font-bold px-3">Popular shows</h2>
					<MultiCarousel key="popularTv" show={popularTv} type="tv" />
				</>
				)}
			</div>
		</>
    )
}

export default Shows;
