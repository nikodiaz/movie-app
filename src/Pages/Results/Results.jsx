//libs
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//api querys
import {
	API_KEY,
	API_KEY_ALT,
	BASE_URL,
	PARAMS_GENRE,
	GET_MOVIE_BY,
	GET_SEARCH,
	PAGE,
} from '../../services/vars';
//store
import { discoverByCategory, search } from '../../redux/actions';
//component
import ResultsView from './ResultsView';
import Layout from '../../components/Layout/Layout';
import Pagination from '../../components/Pagination';

const Results = ({ addOrRemoveFav }) => {
	const { query, category, category_name } = useParams();
	const { searched, by_genre } = useSelector((state) => state);
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			search(BASE_URL + GET_SEARCH + query + API_KEY_ALT + PAGE(page)),
		);
		dispatch(
			discoverByCategory(
				BASE_URL +
					GET_MOVIE_BY +
					API_KEY +
					PARAMS_GENRE +
					category +
					PAGE(page),
			),
		);
		window.scrollTo(0, 0);
	}, [query, category, page]); //eslint-disable-line

	let results;
	let title;

	if (searched.movies.results && by_genre.movies.results) {
		if (!query) {
			results = by_genre.movies;
			title = category_name;
		} else {
			results = searched.movies;
			title = `Resultados de '${query}'...`;
		}
		return (
			<Layout>
				<ResultsView
					results={results.results}
					title={title}
					addOrRemoveFav={addOrRemoveFav}
				/>
				<Pagination
					page={results.page}
					total_pages={results.total_pages}
					next={() => setPage(page + 1)}
					prev={() => setPage(page - 1)}
				/>
			</Layout>
		);
	}
};

export default Results;
