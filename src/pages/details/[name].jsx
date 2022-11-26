import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { HiOutlineLink } from "react-icons/hi";

import StreamingServices from "../../components/StreamingServices";
import ShowsRating from "../../components/ShowsRating";
import SimilarShows from "../../components/SimilarShows";
import Genres from "../../components/Genres";

import { minutesToHours } from "../../utils/minutesToHours";
import 'react-dropdown/style.css';
import { detailsData } from "../../tmdb/detailsData";


const Details = ({ location }) => {
    const { state = {} } = location
    const [details, setDetails] = useState(null);
    const [providers, setProviders] = useState([]);
    const [options, setOptions] = useState([]);
    const [showMethod, setShowMethod] = useState('flatrate')
    const [countrySelected, setCountrySelected] = useState('');
    const [similar, setSimilar] = useState([]);

    
    const getSavedContry = () => window.localStorage.getItem('country');
 
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
    );

    const verifyCountry = () => {       
        if (window.localStorage.getItem('country') === null) {
            window.localStorage.setItem('country', JSON.stringify('US'));    
            setCountrySelected({ value: JSON.parse(getSavedContry()), label: regionNames.of(JSON.parse(getSavedContry())) });
        } 
        else {
            setCountrySelected({ value: JSON.parse(getSavedContry()), label: regionNames.of(JSON.parse(getSavedContry())) });
        } 
    }

    useEffect(() => {
        detailsData(state, setDetails, '')
        detailsData(state, setProviders, '/watch/providers');
        detailsData(state, setSimilar, '/similar');
       
        verifyCountry();
    }, [state.contentId])

    useEffect(() => {
        Object.keys(providers).forEach((key) => {
            setOptions(options => [...options, {value: key, label: regionNames.of(key)}])
        })
    }, [providers])
    
    const handleChange = (value) => {
        let label = regionNames.of(value)
        setCountrySelected({value, label});
        window.localStorage.setItem('country', JSON.stringify(value));
    }

    return (
        <>
            <div className="w-full" 
                style={{
                    backgroundSize: 'cover', 
                    backgroundImage:`linear-gradient(0deg, rgba(1, 124, 128,0.8), rgba(1, 124, 128,0.8)), url(https://image.tmdb.org/t/p/w1280/${details?.backdrop_path})`,
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="flex md:flex-row xs:flex-col xl:p-10 xs:p-4 xl:mx-20 justify-center items-center">
                    <div>
                        <img 
                            className="rounded-xl md:w-80 xs:w-64"
                            src={`https://image.tmdb.org/t/p/w1280/${details?.poster_path}`} 
                        />
                        {state.type === 'movie' ? (
                            <span className="flex text-white space-x-5 font-semibold lg:text-lg md:text-md xs:text-sm ml-3">
                                <p>{details?.release_date?.split('-')[0]}</p>
                                <p>{minutesToHours(details?.runtime)}</p>
                            </span>
                            ):(
                            <span className="flex text-white space-x-5 font-semibold lg:text-lg md:text-md xs:text-sm ml-3">
                                <p>{details?.first_air_date?.split('-')[0]}</p>
                                <p>{details?.seasons.length}{details?.seasons.length > 1 ? ' Seasons' : ' Season'}</p>
                            </span>
                        )}
                    </div>
                    <div className="flex lg:w-3/5 md:w-3/5 xs:w-full flex-col xl:mx-20 md:mx-10 xs:mx-2 md:items-start xs:items-center">
                        <span className="my-5">
                            {state.type === 'movie' ?
                                <h2 className="2xl:text-3xl xl:text-2xl md:text-xl text-white font-bold">{details?.title}</h2>
                                :
                                <h2 className="2xl:text-3xl xl:text-2xl md:text-xl text-white font-bold">{details?.name}</h2>
                            }
                            <p className="text-gray-100 xl:text-base lg:text-lg xs:text-sm">{details?.tagline}</p>
                        </span>
                        <div className="lg:flex my-5">
                            <div className="space-y-5">
                                <span>
                                    <h3 className="text-white font-bold lg:text-lg sm:text-sm xs:text-sm">Overview</h3>
                                    <p className="text-gray-100 xl:text-lg lg:text-base sm:text-sm xs:text-xs font-semibold">{details?.overview}</p>
                                </span>
                                <ShowsRating data={details} />
                                <StreamingServices 
                                    showMethod={showMethod} 
                                    setShowMethod={setShowMethod} 
                                    options={options} 
                                    countrySelected={countrySelected} 
                                    handleChange={handleChange} 
                                    providers={providers}
                                />
                            </div>
                            <Genres data={details?.genres} />
                        </div>
                        <Link className="flex xs:items-center text-white w-28 rounded-sm space-x-2 font-semibold" to={details?.homepage} target="_blank">
                            <HiOutlineLink className="xs:text-sm sm:text-sm lg:text-base"/>
                            <p className="text-white text-center xs:text-sm sm:text-sm lg:text-base">Website</p> 
                        </Link>
                    </div>
                </div>
            </div>   
            <SimilarShows state={state} similar={similar} />
        </>
    )

}

export default Details;