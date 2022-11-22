import React from 'react'
import Rating from "@mui/material/Rating";

const ShowsRating = ({ data}) => {
  return (
      <div className="flex space-x-2 mt-5 text-white">
          <Rating value={data?.vote_average/2} readOnly={true} precision={0.5}/>
          <p className="text-bold">{data?.vote_average}/10</p>
      </div>
  )
}

export default ShowsRating;
