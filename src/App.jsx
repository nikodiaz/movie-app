import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
//Styles
import 'typeface-roboto';
import './scss/App.scss';

//Components
import Home from './routes/Home/Home';
import Results from './routes/Results/Results';
import Detail from './routes/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Favorites from './routes/Favorites/Favorites';
import NotFound from './routes/NotFound/NotFound';
//import configureStore from './app/store';

function App() {
	//Agregar o remover de favoritos
	const favsMovies = localStorage.getItem('favsMovies');
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		if (favsMovies !== null) {
			const favsArray = JSON.parse(favsMovies);
			setFavorites(favsArray);
		}
	}, [favsMovies]);

	let tempFavs;

	if (favsMovies === null) {
		tempFavs = [];
	} else {
		tempFavs = JSON.parse(favsMovies);
	}

	const addOrRemoveFav = (e) => {
		e.preventDefault();
		const btn = e.currentTarget;
		const parent = btn.parentElement;
		const imgUrl = parent.dataset.imgUrl;
		const title = parent.querySelector(
			'.card--overview__title',
		).textContent;
		const rating = parent.querySelector('.rating').textContent;
		const movieData = {
			poster_path: imgUrl,
			title,
			vote_average: rating,
			id: btn.dataset.movieId,
		};
		const movieIsAdded = tempFavs.find(
			(movie) => movie.id === movieData.id,
		);
		if (!movieIsAdded) {
			tempFavs.push(movieData);
			localStorage.setItem('favsMovies', JSON.stringify(tempFavs));
			setFavorites(tempFavs);
		} else {
			let moviesLeft = tempFavs.filter(
				(movie) => movie.id !== movieData.id,
			);
			localStorage.setItem('favsMovies', JSON.stringify(moviesLeft));
			setFavorites(moviesLeft);
		}
	};
	//TODO: Cambios en resolución de pantalla

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
					path='/search=:search'
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
}

export default App;
