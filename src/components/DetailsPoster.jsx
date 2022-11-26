import React from 'react'

import { minutesToHours } from '../utils/minutesToHours'

/**
 * Shows poster, release date and duration
 * @param {string} state content type, movie or serie
 * @param {object} details.poster_path movie or serie poster
 * @param {object} details.release_date movies release date
 * @param {object} details.runtime movies runtime
 * @param {object} details.first_air_date series first air date
 * @param {object} details.seasons series number of seasons
 */

const DetailsPoster = ({ state, details }) => {
  return (
    <div>
        <img 
            className="rounded-xl md:w-80 xs:w-64"
            src={`https://image.tmdb.org/t/p/w1280/${details?.poster_path}`} 
        />
        {state.type === 'movie' ? (
            <span className="flex text-white space-x-5 font-semibold lg:text-lg md:text-md xs:text-sm ml-3">
                <p>{details?.release_date?.split('-')[0]}</p>
                <p>{minutesToHours(details?.runtime)}</p>
            </span>
            ):(
            <span className="flex text-white space-x-5 font-semibold lg:text-lg md:text-md xs:text-sm ml-3">
                <p>{details?.first_air_date?.split('-')[0]}</p>
                <p>{details?.seasons?.length}{details?.seasons.length > 1 ? ' Seasons' : ' Season'}</p>
            </span>
        )}
    </div>
  );
};

export default DetailsPoster;
