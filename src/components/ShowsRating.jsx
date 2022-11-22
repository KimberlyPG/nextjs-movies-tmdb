import React from 'react'
import Rating from "@mui/material/Rating";

const ShowsRating = ({ data}) => {
  return (
      <div className="flex space-x-2 mt-5 text-white">
          <Rating className='xs:text-lg sm:text-2xl' value={data?.vote_average/2} readOnly={true} precision={0.5}/>
          <p className="text-bold xs:text-sm lg:text-base">{data?.vote_average}/10</p>
      </div>
  )
}

export default ShowsRating;
