import React from "react";
import { useState, useEffect } from "react";

import Ratings from 'react-ratings-declarative';

import Layout from "../../components/Layout";

import { minutesToHours } from "../../utils/minutesToHours";

const Details = ({ params, location }) => {
    const param = params[`*`]
    const [data, setData] = useState(null);
    const { state = {} } = location
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
            <div>
                <div className="w-full" 
                    style={{
                        backgroundSize: 'cover', 
                        backgroundImage:`linear-gradient(0deg, rgba(1, 124, 128,0.8), rgba(1, 124, 128,0.8)), url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
                        backgroundAttachment: 'fixed'
                    }}>
                    <div className="flex p-10 mx-20 justify-center" >
                        <div>
                            <img 
                                className="rounded-xl w-80"
                                src={`https://image.tmdb.org/t/p/w1280/${data?.poster_path}`} 
                            />
                            <span className="flex text-white space-x-5 font-semibold text-lg ml-3">
                                <p>{data?.release_date.split('-')[0]}</p>
                                <p>{minutesToHours(data?.runtime)}</p>
                            </span>
                        </div>
                        <div className="flex w-3/5">
                            <div className="mx-20 space-y-5">
                                <div>
                                    <h2 className="text-2xl text-white font-bold text-3xl">{data?.title}</h2>
                                    <p className="text-gray-100">{data?.tagline}</p>
                                </div>
                                <div className="flex text-white space-x-7">
                                    <div className="flex flex-col">
                                        <span>
                                            <h3 className="text-white font-bold text-lg">Overview</h3>
                                            <p className="text-gray-100 text-lg font-semibold">{data?.overview}</p>
                                        </span>
                                        <div className="flex space-x-2 mt-5">
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
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold">Genres</p>
                                        {data?.genres.map((genre) => (
                                            <p className="border border-green-300 rounded-lg mb-2 text-center px-2">{genre.name}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Details;