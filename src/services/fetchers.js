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

const getPopular = async (page = '1', state) => {
	const res = await axios.get(
		`${baseUrl}movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`,
	);
	const { data } = res;
	console.log(data);
	state(data.results);
};

export { getTrending, getPopular };
