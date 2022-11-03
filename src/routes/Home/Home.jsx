import Categories from '../../components/Categories/Categories';
import List from '../../components/List/List';
import Slider from '../../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	fetchPopularMovies,
	fetchTrendingMovies,
} from '../../redux/middleware';

const Home = ({ addOrRemoveFav }) => {
	useEffect(() => {
		dispatch(fetchTrendingMovies());
		dispatch(fetchPopularMovies());
	}, []); //eslint-disable-line

	const dispatch = useDispatch();
	const { trending_movies, popular_movies } = useSelector((state) => state);

	console.log(trending_movies);
	return (
		<div style={{ position: 'relative' }}>
			{trending_movies.movies.results && popular_movies.movies.results && (
				<>
					<Slider data={trending_movies.movies.results} />
					{/* <Categories data={movie_genres.genres} /> */}
					<List
						data={popular_movies.movies.results}
						title='Discover Movies'
						addOrRemoveFav={addOrRemoveFav}
					/>
				</>
			)}
		</div>
	);
};

export default Home;
