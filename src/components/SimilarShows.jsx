import React from 'react'

import ShowsList from './ShowsList';

const SimilarShows = ({ state, similar }) => {
  return (
    <div className="grid justify-items-center mt-10">
        {state.type === 'movie' ? (
            <h2 className="text-gray-500 text-2xl">Similar movies</h2> 
            ):( 
            <h2 className="text-gray-500 text-2xl">Similar series</h2>
        )}
        <ShowsList data={similar} type={state.type} page='details' />
    </div>
  )
}

export default SimilarShows;