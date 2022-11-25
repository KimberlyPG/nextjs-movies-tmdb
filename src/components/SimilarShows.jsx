import React from 'react'

import ShowCard from './ShowCard';

const SimilarShows = ({ state, similar }) => {
  return (
    <div className="grid justify-items-center mt-10">
        {state.type === 'movie' ? (
            <h2 className="text-gray-500 text-2xl">Similar movies</h2> 
            ):( 
            <h2 className="text-gray-500 text-2xl">Similar series</h2>
        )}
        <div className="grid lg:gap-5 xs:gap-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 lg:gap-9 xs:gap-2 xl:px-10 lg:px-5 xs:px-2 xl:w-4/5 mt-4">
            {similar && 
                similar.map((element) => (
                    <ShowCard key={element.id} item={element} type={state.type} page='details'/>
                ))
            }
        </div>
    </div>
  )
}

export default SimilarShows;