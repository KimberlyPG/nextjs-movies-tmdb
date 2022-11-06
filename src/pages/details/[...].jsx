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
            <div className="w-full">
            <div className="w-full" 
                style={{
                    backgroundSize: 'cover', 
                    backgroundImage:`linear-gradient(0deg, rgba(1, 124, 128,0.8), rgba(1, 124, 128,0.8)), url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
                }}>
                <div className="flex p-10 mx-20 justify-center" >
                    <img 
                        className="rounded-xl w-96"
                        src={`https://image.tmdb.org/t/p/w1280/${data?.poster_path}`} 
                    />
                    <span className="flex flex-col w-2/5 ml-20">
                        <h2 className="text-2xl text-white font-bold text-3xl">{data?.title}</h2>
                        <h3 className="text-white font-bold text-lg">Overview</h3>
                        <p className="text-gray-100 text-lg">{data?.overview}</p>
                    </span>
                </div>
            </div>
            </div>
        </Layout>
    )

}

export default Details;