import { FC } from "react";

import ShowsList from './ShowsList';

import { SimilarShowsData } from '../types/tmdb-types';

/**
 * rendering the similar movies or series for details page
 * @param {string} state.type content type, movie or serie
 * @param {array} similar similar movies or series 
 */

type SimilarShowsProps = {
	type: string;
	similar: SimilarShowsData[];
}

const SimilarShows: FC<SimilarShowsProps> = ({ type, similar }) => {
	return (
		<div className="grid justify-items-center mt-10">
			{type === 'movie' ? (
				<h2 className="text-gray-500 text-2xl">Similar movies</h2> 
				):( 
				<h2 className="text-gray-500 text-2xl">Similar series</h2>
			)}
			<ShowsList data={similar} type={type} page='details' />
		</div>
  	);
};

export default SimilarShows;
