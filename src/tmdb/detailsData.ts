import { Dispatch, SetStateAction } from "react";
import { MoviesDetails, TvDetails } from "../types/tmdb-types";

export const detailsData = async(
  contentId: string, 
  type: string, 
  setData: Dispatch<SetStateAction<MoviesDetails & TvDetails>> , 
  slug: string
  ) => {
    await fetch(`https://api.themoviedb.org/3/${type}/${contentId}${slug}?api_key=${process.env.apiKey}&language=en-US`) 
    .then((response) => {
        if (!response.ok) {
          console.log("Something went wrong, code error:", response.status);
        } else {
          return response.json();
        }
    })
    .then((data) => {
		if(!data.results) {
			setData(data);
		} else {
			setData(data.results);
		}
    });
}
