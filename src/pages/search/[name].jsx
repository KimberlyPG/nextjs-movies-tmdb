import * as React from "react";
import { useState, useEffect } from "react";

import ShowCard from "../../components/ShowCard";
import Navbar from "../../components/Navbar";

import { searchContent } from "../../tmdb/search";

const Search = ({ params }) => {
    const param = params[`name`]
    const [moviesView, setMoviesView] = useState(true);
    const [moviesData, setmoviesData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [status, setStatus] = useState('');
    const [content, setContent] = useState([]);

    useEffect(() => {
        moviesView === true ? setContent(moviesData) : setContent(tvData) 
    }, [moviesData, tvData, moviesView])

    useEffect(() => {
        setStatus('Loading');

        searchContent(param, 'movie', setmoviesData, setStatus);   
        searchContent(param, 'tv', setTvData, setStatus);   
    }, [param])

  return (
    <>
      {status === true ? (
        <>
            <div className="grid justify-items-center">
                <div className="w-4/5">
                    <Navbar setMoviesView={setMoviesView}/>
                </div>
                <h2 className="pt-2 flex sm:text-2xl xs:text-xl font-bold text-gray-600">Search result for {`${param}`}</h2>
                <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xl:px-10 lg:px-5 xs:px-2 xl:w-4/5">
                    {content && content?.map((item) => (
                        <ShowCard key={item.id} item={item} type={moviesView ? 'movie': 'tv'}/>
                    ))}
                </div>
            </div>
        </>
        ):(
            <div>Loading</div>
        ) 
        }
    </>
  )
}

export default Search;
