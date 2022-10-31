import * as React from "react"

const MovieAndTvCard = ({ data }) => {
    return (
        <div className="relative hover:opacity-70 h-full cursor-pointer">
            <p className="text-xs text-green-600 absolute m-3 bg-gray-200 bg-opacity-300 p-2 rounded-full">{data.vote_average}</p>
            <img 
                className="h-full rounded-xl"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path.original}`} 
            />
        </div>         
    )
}

export default MovieAndTvCard;