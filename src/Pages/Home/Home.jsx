import { useEffect } from 'react';
//store
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../../store/Slices/trend/thunks';
import { fetchPopularMovies } from '../../store/Slices/popular/thunks';
import { fetchMovieGenres } from '../../store/Slices/genres/thunks';
//component
import HomeView from './HomeView';
import Loader from '../../components/Loader';

const Home = ({ addOrRemoveFav }) => {
	const dispatch = useDispatch();
	const { trend, popular, genres } = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchTrendingMovies());
		dispatch(fetchPopularMovies());
		dispatch(fetchMovieGenres());
	}, [dispatch]);

	return (
		<>
			{trend.loading || popular.loading || genres.loading ? (
				<Loader />
			) : null}
			{trend.data.results &&
			popular.data.results &&
			genres.genres.genres ? (
				<HomeView
					addOrRemoveFav={addOrRemoveFav}
					trending={trend.data.results}
					popular={popular.data.results}
					genres={genres.genres.genres}
				/>
			) : null}
		</>
	);
};

export default Home;
