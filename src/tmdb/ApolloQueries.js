import { gql } from "@apollo/client";

export const POPULAR_MOVIES = gql`
	query {
		popularMovies {
			ok
			error
			movies {
				id
				name: original_title
				overview
				poster_path
				vote_average
			}
		}
	}
`;

export const NOWPLAYING_MOVIES = gql`
	query {
		nowPlayingMovies {
			ok
			error
			movies {
				id
				name: original_title
				poster_path
				vote_average
			}
		}
	}
`;

export const POPULAR_SHOWS = gql`
	query {
		popularShows {
			ok
			error
			shows {
				id
				name
				poster_path
			}
		}
	}
`;

export const AIRING_TODAY_SHOWS = gql`
	query {
		airingTodayShows {
			ok
			error
			shows {
				id
				name
				poster_path
			}
		}
	}
`;
