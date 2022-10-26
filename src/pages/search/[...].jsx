import * as React from "react";
import { useState, useEffect } from "react";

import SearchList from "../../components/Search-list";
import Topbar from "../../components/Topbar";

import { searchContent } from "../../api/search";

const Search = ({ params }) => {
    const param = params[`*`]
    const [moviesView, setMoviesView] = useState(true);
    const [moviesData, setmoviesData] = useState(null);
    const [tvData, setTvData] = useState(null);
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        moviesView === true ? setContent(moviesData) : setContent(tvData) 
    }, [moviesData, tvData, moviesView])

    useEffect(() => {
        setStatus('Loading');

        searchContent(param, 'movie', setmoviesData, setStatus);   
        searchContent(param, 'tv', setTvData, setStatus);   
    }, [param])

  return (
    <div>
        {status === true ? (
            <>
            <div className="grid justify-items-center">
                <div className="pt-10 w-4/5">
                    <Topbar setMoviesView={setMoviesView}/>
                </div>
                <h2 className="pt-5 flex text-2xl font-bold text-gray-600">Search result for {`${param}`}</h2>
                <div className="grid grid-cols-5 p-10 w-4/5">
                    {content && content?.results?.map((item) => (
                        <SearchList key={item.id} item={item} />
                    ))}
                </div>
            </div>
            </>
        ):(
            <div>Loading</div>
        ) 
        }
    </div>
  )
}

export default Search;
