import * as React from "react"
import {  graphql,useStaticQuery } from "gatsby";

const Shows = () => {

    const queryShows = useStaticQuery(graphql`
        query myQuery {
            allTmdbTvTopRated {
            nodes {
                tmdbId
                name  
                first_air_date
                poster_path {
                original
                }
                popularity
                overview
                vote_average     
                genre_ids
            }
            }
        }      
    `)
    console.log("queryShows", queryShows.allTmdbTvTopRated.nodes);
    
    return (
        <div>
            shows component
        </div>
    )
}

export default Shows;