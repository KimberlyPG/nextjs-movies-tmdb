import React from "react";
import { useState, useEffect } from "react";

const Details = ({ params, location }) => {
    const param = params[`*`]
    const [data, setData] = useState(null);
    const { state = {} } = location
    console.log(state)

    return (
        <div>
            <img 
                className="h-full rounded-xl"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${state.movieData.poster_path}`} 
            />
        </div>
    )

}

export default Details;