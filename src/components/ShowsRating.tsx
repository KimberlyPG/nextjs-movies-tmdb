import { FC } from "react";
import Rating from "@mui/material/Rating";

import { MoviesDetails, TvDetails } from "../types/tmdb-types";

/**
 * shows the movie or serie rating on details page
 * @param {number} data.vote_average rating for the movie or serie
 */

type ShowsRatingProps = {
	data: MoviesDetails | TvDetails;
}

const ShowsRating: FC<ShowsRatingProps> = ({ data }) => {
	return (
		<div className="flex space-x-2 mt-5 text-white">
			<Rating 
				className='xs:text-lg sm:text-2xl' 
				value={data?.vote_average/2} 
				readOnly={true} 
				precision={0.5}
			/>
			<p className="text-bold xs:text-sm lg:text-base">{data?.vote_average}/10</p>
		</div>
	);
};

export default ShowsRating;
