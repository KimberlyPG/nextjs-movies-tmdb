import { FC } from 'react'
import { HomeMovies, HomeTv } from '../types/tmdb-types';

import ShowCard from './ShowCard'

/**
 * List of movies or series for search and details pages
 * @param {array} data rendering each show card component 
 * @param {string} type movie or serie
 * @param {string} page	page name
 */

type ShowsListProps = {
	data: HomeMovies[] | HomeTv[];
	type: string;
	page: string;
}

const ShowsList: FC<ShowsListProps> = ({ data, type, page }) => {
  	return (
		<div className="grid lg:gap-5 xs:gap-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 lg:gap-9 xs:gap-2 xl:px-10 lg:px-5 xs:px-2 xl:w-4/5 mt-4">
			{data && 
				data?.map((element: HomeMovies & HomeTv) => (
					<ShowCard key={element.id} item={element} type={type} page={page}/>
				))
			}
		</div>
  	);
};

export default ShowsList;
