import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Detail from './Pages/Detail/Detail';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Results from './Pages/Results/Results';

const AppView = ({ addOrRemoveFav, favorites, ids }) => {
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
