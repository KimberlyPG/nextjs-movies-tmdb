import React from "react";
import { useState, useEffect } from "react";

import Layout from "../../components/Layout";

const Details = ({ params, location }) => {
    const param = params[`*`]
    const [data, setData] = useState(null);
    const { state = {} } = location
    console.log(state)
    console.log("data", data)

    useEffect(() => {
        const movieInformation = async() => {
            await fetch(`https://api.themoviedb.org/3/movie/${state.movieData.id}?api_key=${process.env.GATSBY_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setData(data))
        } 
        movieInformation();
    }, [])
    

    return (
        <Layout>
            <div className="flex p-10 mx-20 justify-center">
                <img 
                    className="rounded-xl w-1/4"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`} 
                />
                <span className="flex flex-col mx-10 w-1/3">
                    <h2 className="text-2xl text-gray-500">{data?.title}</h2>
                    <p>{data?.overview}</p>
                </span>
            </div>
        </Layout>
    )

}

export default Details;