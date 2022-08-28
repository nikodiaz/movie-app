import { useEffect, useState } from 'react';
import { getTrending } from '../services/fetchers';

//Components
import List from '../containers/List/List';
import Slider from '../components/Slider/Slider';

const Home = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	useEffect(() => {
		getTrending('movie', setTrendingMovies);
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
				</>
			)}
		</>
	);
};

export default Home;
