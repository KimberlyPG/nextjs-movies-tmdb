import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import Skeletons from "../../components/Skeletons";

import { searchContent } from "../../tmdb/search";
import ShowsList from "../../components/ShowsList";
import { HomeMovies, HomeTv } from "../../types/tmdb-types";

/**
 * page that shows all the search results 
 */

const Search = () => {
	const router = useRouter();
	const { name } = router.query;
	const [moviesView, setMoviesView] = useState<boolean>(true);
	const [moviesData, setmoviesData] = useState<HomeMovies[]>([]);
	const [tvData, setTvData] = useState<HomeTv[]>([]);
	const [status, setStatus] = useState<string | boolean>(true);
	const [content, setContent] = useState<HomeMovies[] | HomeTv[]>([]);

	useEffect(() => {
		moviesView === true ? setContent(moviesData) : setContent(tvData);
	}, [moviesData, tvData, moviesView]);

	useEffect(() => {
		searchContent(name, "movie", setmoviesData, setStatus);
		searchContent(name, "tv", setTvData, setStatus);
	}, [name]);

	if (status === "loading") return <Skeletons />;
	return (
		<div className="grid justify-items-center">
			<div className="w-4/5">
				<Navbar setMoviesView={setMoviesView} />
			</div>
			<h2 className="pt-2 flex sm:text-2xl xs:text-xl font-bold text-gray-600">
				Search result for {`${name}`}
			</h2>
			<ShowsList
				data={content}
				type={moviesView ? "movie" : "tv"}
				page="search"
			/>
		</div>
	);
};

export default Search;
