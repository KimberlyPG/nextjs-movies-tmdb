import { Dispatch, SetStateAction } from "react";
import { HomeMovies, HomeTv } from "../types/tmdb-types";

export const showsData = async(
    state: string, slug: string, 
    setData: Dispatch<SetStateAction<HomeMovies[] | HomeTv[]>>, 
    setStatus: Dispatch<SetStateAction<string | boolean>>
    ) => {
    setStatus("loading");
        await fetch(`https://api.themoviedb.org/3/${state}/${slug}?api_key=${process.env.apiKey}&language=en-US&page=1`) 
        .then((response) => {
            if (!response.ok) {
            console.log("Something went wrong, code error:", response.status);
            } else {
             return response.json();
            }
        })
        .then((data) => {
            setData(data?.results);
            setStatus(true);
        });
}