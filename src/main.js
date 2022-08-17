const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	params: {
		api_key: API_KEY,
	},
});

/////////////////////////////////////////////////////////////
//////////////////////////UTILS//////////////////////////////
/////////////////////////////////////////////////////////////

function createMovies(movies, container) {
	container.innerHTML = '';

	movies.forEach((movie) => {
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie-container');
		movieContainer.addEventListener('click', () => {
			location.hash = `#movie=${movie.id}`;
		});

		const movieImg = document.createElement('img');
		movieImg.classList.add('movie-img');
		movieImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
		movieImg.alt = movie.title;
		const movieTitle = document.createElement('p');
		movieTitle.classList.add('movie-title');
		movieTitle.textContent = String(movie.title)
			.substring(0, 20)
			.concat('...');

		movieContainer.appendChild(movieImg);
		movieContainer.appendChild(movieTitle);
		container.appendChild(movieContainer);
	});
}

function createCategories(categories, container) {
	container.innerHTML = '';

	categories.forEach((category) => {
		const categoryContainer = document.createElement('div');
		categoryContainer.classList.add('category-container');
		const categoryTitle = document.createElement('h3');
		categoryTitle.classList.add('category-title');
		categoryTitle.id = `id${category.id}`;
		categoryTitle.addEventListener('click', () => {
			location.hash = `#category=${category.id}-${category.name}`;
		});
		categoryTitle.textContent = category.name;

		categoryContainer.appendChild(categoryTitle);
		container.appendChild(categoryContainer);
	});
}

/////////////////////////////////////////////////////////////
///////////////////////TRENDING//////////////////////////////
/////////////////////////////////////////////////////////////

async function getTrending() {
	const { data } = await api('trending/movie/day');

	const movies = data.results.slice(0, 9);

	createMovies(movies, trendingList);
}

async function getTrendingMovies() {
	const { data } = await api('trending/movie/day');

	const movies = data.results.slice(0, 9);

	createMovies(movies, genericSection);
}

/////////////////////////////////////////////////////////////
///////////////////////////CATEGORIES////////////////////////
/////////////////////////////////////////////////////////////

async function getCategories() {
	const { data } = await api('genre/movie/list?language=en-US');

	const categories = data.genres;

	createCategories(categories, categoriesList);
}

/////////////////////////////////////////////////////////////
///////////////////FILTER BY CATEGORIES//////////////////////
/////////////////////////////////////////////////////////////

async function getMoviesByCategory(id) {
	const { data } = await api('discover/movie', {
		params: {
			with_genres: id,
		},
	});

	const movies = data.results;

	createMovies(movies, genericSection);
}

/////////////////////////////////////////////////////////////
///////////////////////SEARCH MOVIES/////////////////////////
/////////////////////////////////////////////////////////////

async function getMoviesBySearch(query) {
	const { data } = await api('search/movie', {
		params: {
			query: query,
		},
	});

	const movies = data.results;

	createMovies(movies, genericSection);
}

/////////////////////////////////////////////////////////////
/////////////////////MOVIE DETAILS///////////////////////////
/////////////////////////////////////////////////////////////

async function getMovieById(id) {
	const { data: movie } = await api('movie/' + id);

	movieDetailImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
	movieDetailTitle.textContent = movie.title;
	movieDetailDescription.textContent = movie.overview;
	movieDetailScore.textContent = String(movie.vote_average).substring(0, 3);

	createCategories(movie.genres, movieDetailCategoriesList);
	getRelatedMoviesById(id);
}

async function getRelatedMoviesById(id) {
	const { data } = await api(`movie/${id}/recommendations`);
	const relatedMovies = data.results;

	createMovies(relatedMovies, relatedMoviesContainer);
}
