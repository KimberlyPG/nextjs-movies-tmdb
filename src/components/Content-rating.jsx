import React from 'react'
import Ratings from 'react-ratings-declarative';

const ContentRating = ({ data}) => {
  return (
    <div className="flex space-x-2 mt-5 text-white">
        <Ratings
            rating={data?.vote_average}
            widgetDimensions="19px"
            widgetSpacings="5px"
        >
            {Array.from({ length: 10 }, (_, i) => 
                <Ratings.Widget widgetRatedColor="yellow" />
            )}
        </Ratings>
        <p className="text-semibold mt-1">{data?.vote_average}/10</p>
    </div>
  )
}

export default ContentRating;
