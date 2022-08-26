import { useEffect, useState } from 'react';
import { getTrending } from '../services/fetchers';

//Components
import List from '../components/List/List';

const Home = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getTrending('movie', setMovies);
	}, []);
	return (
		<>
			{movies.length !== 0 && (
				<>
					<List section='Trending Movies' data={movies.slice(0, 4)} />
				</>
			)}
		</>
	);
};

export default Home;
