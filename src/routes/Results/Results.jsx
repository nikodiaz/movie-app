//libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//api querys
import {
	API_KEY,
	API_KEY_ALT,
	BASE_URL,
	PARAMS_GENRE,
	GET_MOVIE_BY,
	GET_SEARCH,
} from '../../services/vars';
//store
import { discoverByCategory, search } from '../../redux/actions';
//component
import ResultsView from './ResultsView';
//style
import './Results.scss';

const Results = ({ addOrRemoveFav }) => {
	const { query, category, category_name } = useParams();
	const { searched, by_genre } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(search(BASE_URL + GET_SEARCH + query + API_KEY_ALT));
		dispatch(
			discoverByCategory(
				BASE_URL + GET_MOVIE_BY + API_KEY + PARAMS_GENRE + category,
			),
		);
	}, [query, category]); //eslint-disable-line

	let results;
	let title;

	if (searched.movies.results && by_genre.movies.results) {
		if (!query) {
			results = by_genre.movies.results;
			title = category_name;
		} else {
			results = searched.movies.results;
			title = `Resultados de '${query}'...`;
		}
		return (
			<ResultsView
				results={results}
				title={title}
				addOrRemoveFav={addOrRemoveFav}
			/>
		);
	}
};

export default Results;
