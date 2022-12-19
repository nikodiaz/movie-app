import { useEffect } from 'react';
//store
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTrendingMovies,
	fetchPopularMovies,
	fetchMovieGenres,
} from 'store/Slices/movies';
//component
import HomeView from './HomeView';
import Loader from 'components/Loader';

const Home = () => {
	const dispatch = useDispatch();
	const { movies, loading, genres } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(fetchTrendingMovies());
		dispatch(fetchPopularMovies());
		dispatch(fetchMovieGenres());
	}, [dispatch]);

	return (
		<>
			{loading ? <Loader /> : null}
			{movies.trending.results &&
			movies.popular.results &&
			genres.genres ? (
				<HomeView
					trending={movies.trending.results}
					popular={movies.popular.results}
					genres={genres.genres}
				/>
			) : null}
		</>
	);
};

export default Home;
