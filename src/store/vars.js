export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=2401a0e43ad659da80761c5b927e5930';
export const API_KEY_ALT = '&api_key=2401a0e43ad659da80761c5b927e5930';
export const PAGE = (n) => `&page=${n}`;

export const DISCOVER = 'discover/';
export const GET_GENRES = (type) => `genre/${type}/list`;
export const GET_POPULAR = 'popular';
export const GET_TOP_RATED = 'top_rated';
export const GET_UPCOMING = 'upcoming';
export const GET_LATEST = 'latest';
export const GET_TRENDING = 'trending/';
export const GET_MOVIE = (movieID) => `movie/${movieID}`;

export const PARAMS_LANG_SPA = '&language=es-ES';
export const PARAMS_LANG_ENG = '&language=en-US';
export const PARAMS_GENRE = '&with_genres=';

export const GET_SEARCH_MOVIE = 'search/movie?query=';
export const GET_IMG = 'https://image.tmdb.org/t/p/';
export const GET_CAST = '/casts';
export const GET_VIDEO = '/videos';
export const URL_YOUTUBE = 'https://www.youtube.com/embed/';

export const IMG_BACKDROP_SMALL = 'w300';
export const IMG_BACKDROP_MEDIUM = 'w780';
export const IMG_BACKDROP_LARGE = 'w1280';
export const IMG_BACKDROP_ORIGINAL = 'original';
export const IMG_POSTER_SMALL = 'w342';
export const IMG_POSTER_MEDIUM = 'w500';
export const IMG_POSTER_LARGE = 'w780';
export const IMG_POSTER_ORIGINAL = 'original';

export const TYPE_MOVIE = 'movie/';
export const TYPE_TV = 'tv/';
export const TYPE_ALL = 'all/';
export const TYPE_PERSON = 'person/';
export const TIME_DAY = 'day';
export const TIME_WEEK = 'week';
export const CAST_MAX_NUM = 5;
export const TRAILER_MAX_NUM = 3;
