import Categories from '../../components/Categories/Categories';
import List from '../../components/List/List';
import Slider from '../../components/Slider/Slider';
import useFetch from '../../hooks/useFetch';
import {
	API_KEY,
	BASE_URL,
	LANGUAGE_SPA,
	TYPE_MOVIE,
	URL_MOVIE_CATEGORIES,
	URL_POPULAR_MOVIE,
	URL_TRENDING,
} from '../../hooks/vars';

const Home = ({ addOrRemoveFav }) => {
	const trendingToday = useFetch(
		BASE_URL + URL_TRENDING + TYPE_MOVIE + API_KEY + LANGUAGE_SPA,
	);
	const discoverPopularMovies = useFetch(
		BASE_URL + URL_POPULAR_MOVIE + API_KEY,
	);
	const movieCategories = useFetch(
		BASE_URL + URL_MOVIE_CATEGORIES + API_KEY + LANGUAGE_SPA,
	);

	if (
		!trendingToday.loading &&
		!movieCategories.loading &&
		!discoverPopularMovies.loading
	) {
		const genres = movieCategories.data.genres;
		return (
			<div style={{ position: 'relative' }}>
				<Slider
					data={trendingToday.data}
					loading={trendingToday.loading}
				/>
				<Categories data={genres} />
				<List
					data={discoverPopularMovies}
					title='Discover Movies'
					addOrRemoveFav={addOrRemoveFav}
				/>
			</div>
		);
	}
};

export default Home;
