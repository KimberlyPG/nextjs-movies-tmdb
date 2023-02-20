export type HomeMovies = {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type HomeTv = {
    backdrop_path:     string;
    first_air_date:    string;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}

export type MoviesDetails = {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface TvDetails {
    adult:                boolean;
    backdrop_path:        string;
    created_by:           any[];
    episode_run_time:     any[];
    first_air_date:       string;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        string;
    last_episode_to_air:  TEpisodeToAir;
    name:                 string;
    next_episode_to_air:  TEpisodeToAir;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: any[];
    production_countries: ProductionCountry[];
    seasons:              Season[];
    spoken_languages:     SpokenLanguage[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export interface TEpisodeToAir {
    air_date:        string;
    episode_number:  number;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    runtime:         null;
    season_number:   number;
    show_id:         number;
    still_path:      null;
    vote_average:    number;
    vote_count:      number;
}

export interface Network {
    id:             number;
    name:           string;
    logo_path:      string;
    origin_country: string;
}

export interface Season {
    air_date:      string;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   null;
    season_number: number;
}

export type Genre = {
    id:   number;
    name: string;
}

export type ProductionCompany = {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name:       string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export type SimilarShowsData = {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type StreamingCompany = {
    logo_path:        string;
    provider_id:      number;
    provider_name:    string;
    display_priority: number;
}
