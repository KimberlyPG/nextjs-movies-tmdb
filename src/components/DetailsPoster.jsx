import React from 'react'

import { minutesToHours } from '../utils/minutesToHours'

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
  )
}

export default DetailsPoster