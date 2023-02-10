import { FC } from 'react';
import Link from 'next/link';

import { ratingFormat } from '../utils/ratingFormat';
import { HomeMovies, HomeTv } from '../types/tmdb-types';

/**
 * Creates the movie or serie card for all the pages
 * @param {string} item.poster_path movie or serie poster
 * @param {number} item.vote_average rating for the movie or serie
 * @param {string} item.release_date movies release date
 * @param {string} item.first_air_date series first air date
 * @param {boolean} item.adult check if the movie or serie is restricted
 * @param {string} item.name series name
 * @param {string} item.title movies name
 * @param {string} type movie or serie
 * @param {string} page	page name
 */

type ShowCardProps = {
	item: HomeMovies & HomeTv;
	type: string;
	page: string;
}  

const ShowCard: FC<ShowCardProps> = ({ item, type, page }) => {

	if(item.poster_path === null) return null
	return (
		<Link href={{pathname: `/details/${item.title}`, query: {contentId: (item.id), type: (type) }}} >
			<div className='cursor-pointer'> 
				<div className='relative'>
					{item.vote_average !== 0 && item.vote_average!== undefined &&
						<div className="flex justify-center z-10 absolute p-2 rounded-full h-8 w-8 m-3 bg-gray-200 bg-opacity-90">
							<p className="text-xs text-green-600">{ratingFormat(item.vote_average)}</p>
						</div>
					} 
					<span className='flex z-10 absolute bottom-0 p-1 text-xs text-white font-bold space-x-5'>
						{item.release_date && page !== 'home' &&
							<p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1'>{item.release_date.split("-")[0]}</p>           
						}   
						{item.first_air_date && page !== 'home' &&
							<p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1'>{item.first_air_date.split("-")[0]}</p>           
						}   
						{item.adult !== undefined && page !== 'home' &&
							<p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1 border border-green-400'>{item.adult === false ? 'ALL': '18+'}</p> 
						}
					</span>
					<div className='overflow-hidden h-full'>
						<img 
							className="hover:opacity-90 h-full rounded-xl hover:scale-110"
							src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} 
							alt={`${item.name} poster`}
						/> 
					</div>
				</div> 
				{page !== 'home' &&  <h3 className='font-bold text-sm'>{item.title ? item.title : item.name}</h3>}              
			</div>
		</Link>
	);
};

export default ShowCard;
