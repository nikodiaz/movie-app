import Categories from '../../components/Categories/Categories';
import List from '../../components/List/List';
import Slider from '../../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	fetchMovieGenres,
	fetchPopularMovies,
	fetchTrendingMovies,
} from '../../redux/actions';
import {
	API_KEY,
	BASE_URL,
	GET_GENRES,
	GET_MOVIE_POPULAR,
	GET_TRENDING,
	PARAMS_LANG_SPA,
	TYPE_MOVIE,
} from '../../services/vars';

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
		<div style={{ position: 'relative' }}>
			{trending.movies.results &&
				popular.movies.results &&
				genres.genres.genres && (
					<>
						<Slider data={trending.movies.results} />
						<Categories data={genres.genres.genres} />
						<List
							data={popular.movies.results}
							title='Discover Movies'
							addOrRemoveFav={addOrRemoveFav}
						/>
					</>
				)}
		</div>
	);
};

export default Home;
