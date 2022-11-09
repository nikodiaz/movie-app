import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Detail from './routes/Detail/Detail';
import Favorites from './routes/Favorites/Favorites';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Results from './routes/Results/Results';

const AppView = ({ addOrRemoveFav, favorites }) => {
	return (
		<>
			<SearchBar />
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Home addOrRemoveFav={addOrRemoveFav} />}
				/>
				<Route path='/movie/:id' element={<Detail />} />
				<Route
					path='/search=:query'
					element={<Results addOrRemoveFav={addOrRemoveFav} />}
				/>
				<Route
					path='/:category_name/:category'
					element={<Results addOrRemoveFav={addOrRemoveFav} />}
				/>
				<Route
					path='/favorites'
					element={
						<Favorites
							addOrRemoveFav={addOrRemoveFav}
							favorites={favorites}
						/>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default AppView;
