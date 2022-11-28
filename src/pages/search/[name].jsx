import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Skeletons from "../../components/Skeletons";

import { searchContent } from "../../tmdb/search";
import ShowsList from "../../components/ShowsList";

/**
 * page that shows all the search results 
 * @param {object} params getting the movie or serie name from the dynamic route 
 */

const Search = ({ params }) => {
	const param = params[`name`];
	const [moviesView, setMoviesView] = useState(true);
	const [moviesData, setmoviesData] = useState([]);
	const [tvData, setTvData] = useState([]);
	const [status, setStatus] = useState(true);
	const [content, setContent] = useState([]);

	useEffect(() => {
		moviesView === true ? setContent(moviesData) : setContent(tvData);
	}, [moviesData, tvData, moviesView]);

	useEffect(() => {
		searchContent(param, "movie", setmoviesData, setStatus);
		searchContent(param, "tv", setTvData, setStatus);
	}, [param]);

	if (status === "loading") return <Skeletons />;
	return (
		<div className="grid justify-items-center">
			<div className="w-4/5">
				<Navbar setMoviesView={setMoviesView} />
			</div>
			<h2 className="pt-2 flex sm:text-2xl xs:text-xl font-bold text-gray-600">
				Search result for {`${param}`}
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
