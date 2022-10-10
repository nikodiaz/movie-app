import Categories from '../../components/Categories/Categories';
import List from '../../components/List/List';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';
import useFetch from '../../hooks/useFetch';
import {
	API_KEY,
	LANGUAGE_SPA,
	URL_LIST,
	URL_MOVIE_CATEGORIES,
	URL_TRENDING,
} from '../../hooks/vars';

const Home = () => {
	const trendingToday = useFetch(URL_TRENDING + API_KEY + LANGUAGE_SPA);
	const discoverMovies = useFetch(URL_LIST + API_KEY);
	const movieCategories = useFetch(
		URL_MOVIE_CATEGORIES + API_KEY + LANGUAGE_SPA,
	);
	console.log(trendingToday);

	if (
		!trendingToday.loading &&
		!movieCategories.loading &&
		!discoverMovies.loading
	) {
		const genres = movieCategories.data.genres;
		return (
			<div style={{ position: 'relative' }}>
				<SearchBar />
				<NavBar />
				<Slider
					data={trendingToday.data}
					loading={trendingToday.loading}
				/>
				<Categories data={genres} />
				<List data={discoverMovies} title='Discover' />
			</div>
		);
	}
};

export default Home;
