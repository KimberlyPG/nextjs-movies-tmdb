import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { HiOutlineLink } from "react-icons/hi";

import StreamingServices from "../../components/StreamingServices";
import ShowsRating from "../../components/ShowsRating";
import SimilarShows from "../../components/SimilarShows";
import Genres from "../../components/Genres";
import DetailsContainer from "../../components/DetailsContainer";
import DetailsPoster from "../../components/DetailsPoster";

import 'react-dropdown/style.css';
import { detailsData } from "../../tmdb/detailsData";

/**
 * page that shows all the movies or series details
 * @param {object} location getting state data from show card component
 */

const Details = ({ location }) => {
    const { state = {} } = location
    const [details, setDetails] = useState(null);
    const [providers, setProviders] = useState([]);
    const [options, setOptions] = useState([]);
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
            <DetailsContainer details={details}>
                <div className="flex md:flex-row xs:flex-col xl:p-10 xs:p-4 xl:mx-20 justify-center items-center">
                    <DetailsPoster state={state} details={details} />
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
                                    options={options} 
                                    countrySelected={countrySelected} 
                                    handleChange={handleChange} 
                                    providers={providers}
                                />
                            </div>
                            <Genres data={details?.genres} />
                        </div>
                        {details?.homepage !== '' &&
                            <Link className="flex xs:items-center text-white w-28 rounded-sm space-x-2 font-semibold" to={details?.homepage} target="_blank">
                                <HiOutlineLink className="xs:text-sm sm:text-sm lg:text-base"/>
                                <p className="text-white text-center xs:text-sm sm:text-sm lg:text-base">Website</p> 
                            </Link>
                        }
                    </div>
                </div>
            </DetailsContainer>   
            <SimilarShows state={state} similar={similar} />
        </>
    );
};

export default Details;
