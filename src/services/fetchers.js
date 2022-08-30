import axios from 'axios';

const API_KEY = '2401a0e43ad659da80761c5b927e5930';
const baseUrl = 'https://api.themoviedb.org/3/';

/**
 *
 * @param {String} media media type
 * @param {Function} state setState
 */

const getTrending = async (media, state) => {
	const res = await axios.get(
		`${baseUrl}trending/${media}/day?api_key=${API_KEY}`,
	);
	const { data } = res;
	state(data.results);
};

/**
 *
 * @param {Number} page page number
 * @param {Function} state setState
 */

const getPopular = async (page = 1, state) => {
	const res = await axios.get(
		`${baseUrl}movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`,
	);
	const { data } = res;
	state(data.results);
};

/**
 *
 * @param {Function} state
 */

const getTopRated = async (state) => {
	const res = await axios.get(
		`${baseUrl}movie/top_rated?api_key=${API_KEY}&language=es-ES`,
	);
	const { data } = res;
	state(data.results);
};

const createRequestToken = async () => {
	const res = await axios.post(
		`${baseUrl}authentication/session/new?api_key=${API_KEY}`,
	);
	console.log(res);
};

export { getTrending, getPopular, getTopRated, createRequestToken };
