export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=2401a0e43ad659da80761c5b927e5930';
export const API_KEY_ALT = '&api_key=2401a0e43ad659da80761c5b927e5930';
export const PAGE = (n) => `&page=${n}`;

export const GET_MOVIE_BY = 'discover/movie';
export const GET_GENRES = 'genre/movie/list';
export const GET_MOVIE_POPULAR = 'movie/popular';
export const GET_MOVIE_TOP_RATED = 'movie/top_rated';
export const GET_MOVIE_UPCOMING = 'movie/upcoming';
export const GET_MOVIE_LATEST = 'movie/latest';
export const GET_MOVIE = (movieID) => `movie/${movieID}`;

export const PARAMS_LANG_SPA = '&language=es-ES';
export const PARAMS_LANG_ENG = '&language=en-US';
export const PARAMS_GENRE = '&with_genres=';

export const GET_TRENDING = 'trending/';
export const GET_SEARCH = 'search/movie?query=';
export const GET_PERSON = 'person/';
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

export const TYPE_MOVIE = 'movie/day';
export const CAST_MAX_NUM = 5;
export const TRAILER_MAX_NUM = 3;
