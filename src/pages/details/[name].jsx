import React from "react";
import { useState, useEffect } from "react";

import Ratings from 'react-ratings-declarative';

import Layout from "../../components/Layout";

import { minutesToHours } from "../../utils/minutesToHours";

const Details = ({ params, location }) => {
    // const param = params[`*`]
    const [data, setData] = useState(null);
    const [providers, setProviders] = useState(null);
    const { state = {} } = location
    console.log("data", data)
    console.log("providers", providers)

    useEffect(() => {
        const movieInformation = async() => {
            await fetch(`https://api.themoviedb.org/3/${state.type}/${state.contentId}?api_key=${process.env.GATSBY_API_KEY}&language=en-US`) 
            .then(res => res.json())
            .then(data => setData(data))
        } 
        movieInformation();
    }, [])

    useEffect(() => {
        const movieInformation = async() => {
            await fetch(`https://api.themoviedb.org/3/${state.type}/${state.contentId}/watch/providers?api_key=${process.env.GATSBY_API_KEY}&language=en-US`) 
            .then(res => res.json())
            .then(data => setProviders(data.results))
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
                            {state.type === 'movie' ?
                                <span className="flex text-white space-x-5 font-semibold text-lg ml-3">
                                    <p>{data?.release_date?.split('-')[0]}</p>
                                    <p>{minutesToHours(data?.runtime)}</p>
                                </span>
                                :
                                <span className="flex text-white space-x-5 font-semibold text-lg ml-3">
                                    <p>{data?.first_air_date?.split('-')[0]}</p>
                                    <p>{data?.seasons.length}{data?.seasons.length > 1 ? ' Seasons' : ' Season'}</p>
                                </span>
                            }
                        </div>
                        <div className="flex w-3/5">
                            <div className="mx-20 space-y-5">
                                <div>
                                    {state.type === 'movie' ?
                                        <h2 className="text-2xl text-white font-bold text-3xl">{data?.title}</h2>
                                        :
                                        <h2 className="text-2xl text-white font-bold text-3xl">{data?.name}</h2>
                                    }
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
                                        <div className="mt-5">
                                            <p className="font-bold">Stream</p>
                                            <div className="flex space-x-5">
                                                {providers?.US?.flatrate?.map((provider) => (
                                                    <img 
                                                        className="w-10"
                                                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${provider.logo_path}`} 
                                                        alt={`${provider.provider_name} image`} 
                                                    />
                                                ))}
                                            </div>
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