//libs
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//store
import {
	fetchMovieGenres,
	fetchPopularMovies,
	fetchTrendingMovies,
} from '../../redux/actions';
//api querys
import {
	API_KEY,
	BASE_URL,
	GET_GENRES,
	GET_MOVIE_POPULAR,
	GET_TRENDING,
	PARAMS_LANG_SPA,
	TYPE_MOVIE,
} from '../../services/vars';
//component
import HomeView from './HomeView';

const Home = ({ addOrRemoveFav }) => {
	useEffect(() => {
		dispatch(
			fetchTrendingMovies(
				BASE_URL +
					GET_TRENDING +
					TYPE_MOVIE +
					API_KEY +
					PARAMS_LANG_SPA,
			),
		);
		dispatch(
			fetchPopularMovies(
				BASE_URL + GET_MOVIE_POPULAR + API_KEY + PARAMS_LANG_SPA,
			),
		);
		dispatch(
			fetchMovieGenres(BASE_URL + GET_GENRES + API_KEY + PARAMS_LANG_SPA),
		);
	}, []); //eslint-disable-line

	const dispatch = useDispatch();
	const { trending, popular, genres } = useSelector((state) => state);

	return (
		<>
			{trending.movies.results &&
			popular.movies.results &&
			genres.genres.genres ? (
				<HomeView
					addOrRemoveFav={addOrRemoveFav}
					trending={trending.movies.results}
					popular={popular.movies.results}
					genres={genres.genres.genres}
				/>
			) : null}
		</>
	);
};

export default Home;
