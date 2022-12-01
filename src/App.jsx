import { useEffect, useState } from 'react';
//Styles
import 'typeface-roboto';
import AppView from './AppView';
import './scss/index.scss';

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

	return (
		<>
			<AppView addOrRemoveFav={addOrRemoveFav} favorites={favorites} />
		</>
	);
}

export default App;
