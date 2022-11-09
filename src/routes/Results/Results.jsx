import './Results.scss';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import {
	API_KEY,
	API_KEY_ALT,
	BASE_URL,
	PARAMS_GENRE,
	GET_MOVIE_BY,
	GET_SEARCH,
} from '../../services/vars';

const Results = ({ addOrRemoveFav }) => {
	const { search, category, category_name } = useParams();
	const searchResults = useFetch(
		BASE_URL + GET_SEARCH + search + API_KEY_ALT,
	);
	const discoverByCategory = useFetch(
		BASE_URL + GET_MOVIE_BY + API_KEY + PARAMS_GENRE + category,
	);

	let results;
	let title;

	if (!searchResults.loading && !discoverByCategory.loading) {
		if (!search) {
			results = discoverByCategory.data.results;
			title = category_name;
		} else {
			results = searchResults.data.results;
			title = `Resultados de '${search}'...`;
		}
		return (
			<div className='results'>
				<h2 className='results--title'>{title}</h2>
				<div className='results--container'>
					{results.map((item) => {
						return (
							<Card
								key={item.id}
								data={item}
								loading={item.loading}
								addOrRemoveFav={addOrRemoveFav}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export default Results;
