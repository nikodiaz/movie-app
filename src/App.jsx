//Styles
import 'typeface-roboto';
import './scss/index.scss';
//libs
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//components
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Results from './Pages/Results/Results';
import Favorites from './Pages/Favorites';
import NotFound from './Pages/NotFound';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

function App() {
	const favorites = useSelector((state) => state.favs);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<Detail />} />
				<Route path='/search=:query' element={<Results />} />
				<Route path='/:category_name/:category' element={<Results />} />
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
