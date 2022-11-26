import React from 'react'

import ShowCard from './ShowCard'

/**
 * List of movies or series for search and details pages
 * @param {array} data rendering each show card component 
 * @param {string} type movie or serie
 * @param {string} page	page name
 */

const ShowsList = ({ data, type, page }) => {
  	return (
		<div className="grid lg:gap-5 xs:gap-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 lg:gap-9 xs:gap-2 xl:px-10 lg:px-5 xs:px-2 xl:w-4/5 mt-4">
			{data && 
				data?.map((element) => (
					<ShowCard key={element.id} item={element} type={type} page={page}/>
				))
			}
		</div>
  	);
};

export default ShowsList;
