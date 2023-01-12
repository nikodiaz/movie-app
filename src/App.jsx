//Styles
import 'typeface-roboto';
import './scss/index.scss';
//libs
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//components
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Results from './pages/Results/Results';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';
import TvPage from './pages/TvPage';

function App() {
	const favorites = useSelector((state) => state.favs);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tv' element={<TvPage />} />
				<Route path='/movie/:id' element={<Detail />} />
				<Route path='/search/:query' element={<Results />} />
				<Route
					path='/search/:category_name/:category'
					element={<Results />}
				/>
				<Route
					path='/favorites'
					element={<Favorites favorites={favorites} />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Toaster position='bottom-center' reverseOrder={false} />
		</>
	);
}

export default App;
