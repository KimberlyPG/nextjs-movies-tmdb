import React, { useEffect } from "react"
import { navigate } from "gatsby";

const MovieAndTvCard = ({ data, name, type }) => {

    return (
        <div className="relative h-full overflow-hidden cursor-pointer" onClick={() => navigate(`/details/${name}`, {state: {contentId: data.id, type: type }})}>
            {data.vote_average !== 0 && data.vote_average!== undefined &&
                <div className="flex justify-center z-10 absolute p-2 rounded-full h-8 w-8 m-3 bg-gray-200 bg-opacity-90">
                    <p className="text-xs text-green-600">{data.vote_average}</p>
                </div>
            }
            <img 
                className="hover:opacity-90 h-full rounded-xl hover:scale-110"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path.original !== undefined ? data.poster_path.original : data.poster_path}`} 
            />                    
        </div>         
    )
}

export default MovieAndTvCard;