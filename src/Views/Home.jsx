import { useEffect, useState } from 'react';
import { getTopRated, getTrending } from '../services/fetchers';

//Components
import List from '../containers/List/List';
import Slider from '../components/Slider/Slider';

const Home = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [topRated, setTopRated] = useState([]);
	useEffect(() => {
		getTrending('movie', setTrendingMovies);
		getTopRated(setTopRated);
	}, []);
	return (
		<>
			<Slider />
			{trendingMovies.length !== 0 && (
				<>
					<List
						section='Trending Movies'
						data={trendingMovies.slice(0, 4)}
					/>
					<List
						section='Top Rated Movies'
						data={topRated.slice(0, 4)}
					/>
				</>
			)}
		</>
	);
};

export default Home;
