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
            <div className="w-full" style={{background: `linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}) no-repeat, auto`,  backgroundSize: 'cover', width: '100%'}}>
                <div className="flex p-10 mx-20 justify-center" >
                    <img 
                        className="rounded-xl w-96"
                        src={`https://image.tmdb.org/t/p/w1280/${data?.poster_path}`} 
                    />
                    <span className="flex flex-col w-2/5 ml-20">
                        <h2 className="text-2xl text-gray-500">{data?.title}</h2>
                        <h3>Overview</h3>
                        <p>{data?.overview}</p>
                    </span>
                </div>
            </div>
        </Layout>
    )

}

export default Details;