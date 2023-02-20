import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from 'next/router';
import { HiOutlineLink } from "react-icons/hi";

import StreamingServices from "../../components/StreamingServices";
import ShowsRating from "../../components/ShowsRating";
import SimilarShows from "../../components/SimilarShows";
import Genres from "../../components/Genres";
import DetailsContainer from "../../components/DetailsContainer";
import DetailsPoster from "../../components/DetailsPoster";

import 'react-dropdown/style.css';
import { detailsData } from "../../tmdb/detailsData";
import { MoviesDetails, TvDetails, SimilarShowsData } from "../../types/tmdb-types";

/**
 * page that shows all the movies or series details and also the similar shows
 */

interface Options {
    value: string;
} 

const Details: NextPage = () => {
    const router = useRouter();
    const contentId = router.query.contentId as string;
    const type = router.query.type as string;
    const [details, setDetails] = useState<MoviesDetails & TvDetails>(null);
    const [providers, setProviders] = useState<{}>({});
    const [options, setOptions] = useState<Options[]>([]);
    const [countrySelected, setCountrySelected] = useState<string>('');
    const [similar, setSimilar] = useState<SimilarShowsData[]>([]);
 
    console.log("prov", providers)
    const getSavedContry = () => {
        const country = window.localStorage.getItem('country');
        return JSON.parse(country);
    };

    useEffect(() => {
        detailsData(contentId, type, setDetails, '')
        detailsData(contentId, type, setProviders, '/watch/providers');
        detailsData(contentId, type, setSimilar, '/similar');
        
        const verifyCountry = () => {       
            if (window.localStorage.getItem('country') === null) {
                window.localStorage.setItem('country', JSON.stringify('US'));    
                setCountrySelected(getSavedContry());
            } 
            else {
                setCountrySelected(getSavedContry());
            } 
        }
        verifyCountry();
    }, [router])
    
    useEffect(() => {
        Object.keys(providers).forEach((key) => {
            setOptions(options => [...options, {value: key}])
        })
    }, [providers])
 
    const handleChange = (value) => {
        setCountrySelected(value);
        window.localStorage.setItem('country', JSON.stringify(value));
    }

    return (
        <>
            <DetailsContainer details={details}>
                <div className="flex md:flex-row xs:flex-col xl:p-10 xs:p-4 xl:mx-20 justify-center items-center">
                    <DetailsPoster type={type} details={details} />
                    <div className="flex lg:w-3/5 md:w-3/5 xs:w-full flex-col xl:mx-20 md:mx-10 xs:mx-2 md:items-start xs:items-center">
                        <span className="my-5">
                            {type === 'movie' ? (
                                <h2 className="2xl:text-3xl xl:text-2xl md:text-xl text-white font-bold">{details?.title}</h2>
                            ):(
                                <h2 className="2xl:text-3xl xl:text-2xl md:text-xl text-white font-bold">{details?.name}</h2>
                            )}
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
                            <a 
                                className="flex xs:items-center text-white w-28 rounded-sm space-x-2 font-semibold" 
                                href={details?.homepage} 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HiOutlineLink className="xs:text-sm sm:text-sm lg:text-base"/>
                                <p className="text-white text-center xs:text-sm sm:text-sm lg:text-base">Website</p> 
                            </a>
                        }
                    </div>
                </div>
            </DetailsContainer>   
            <SimilarShows type={type} similar={similar} />
        </>
    );
};

export default Details;
