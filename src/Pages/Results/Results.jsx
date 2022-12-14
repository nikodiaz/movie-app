//libs
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//store
import { searchMovies } from '../../store/Slices/search/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByGenreMovies } from '../../store/Slices/byGenre/thunks';
//component
import ResultsView from './ResultsView';
import Layout from '../../components/Layout/Layout';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

const Results = ({ addOrRemoveFav }) => {
	const dispatch = useDispatch();
	const { search, byGenre } = useSelector((state) => state);
	const { query, category, category_name } = useParams();
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(searchMovies(page, query));
		dispatch(fetchByGenreMovies(page, category));
		window.scrollTo(0, 0);
	}, [query, category, page, dispatch]);

	let results;
	let title;

	if (search.data.results || byGenre.data.results) {
		if (!query) {
			results = byGenre.data;
			title = category_name;
		} else {
			results = search.data;
			title = `Resultados de '${query}'...`;
		}

		return (
			<Layout>
				{results.results ? (
					<>
						<ResultsView
							results={results.results}
							title={title}
							addOrRemoveFav={addOrRemoveFav}
						>
							{results.results.map((item) => {
								return (
									<Card
										key={item.id}
										data={item}
										loading={item.loading}
										addOrRemoveFav={addOrRemoveFav}
									/>
								);
							})}
						</ResultsView>
						<Pagination
							page={results.page}
							total_pages={results.total_pages}
							next={() => setPage(page + 1)}
							prev={() => setPage(page - 1)}
						/>
					</>
				) : (
					<Loader />
				)}
			</Layout>
		);
	}
};

export default Results;
