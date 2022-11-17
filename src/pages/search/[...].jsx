"use client"

import * as React from "react";
import { useState, useEffect } from "react";

import ShowCard from "../../components/Show-card";
import Navbar from "../../components/Navbar";

import { searchContent } from "../../tmdb/search";

const Search = ({ params }) => {
    const param = params[`*`]
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
                <h2 className="pt-2 flex text-2xl font-bold text-gray-600">Search result for {`${param}`}</h2>
                <div className="grid grid-cols-5 p-10 w-4/5">
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
