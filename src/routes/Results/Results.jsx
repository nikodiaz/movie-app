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

const Results = ({ title, addOrRemoveFav }) => {
	const { search, category } = useParams();
	const searchResults = useFetch(
		BASE_URL + GET_SEARCH + search + API_KEY_ALT,
	);
	const discoverByCategory = useFetch(
		BASE_URL + GET_MOVIE_BY + API_KEY + PARAMS_GENRE + category,
	);

	let results;

	if (!searchResults.loading && !discoverByCategory.loading) {
		if (!search) {
			results = discoverByCategory.data.results;
		} else {
			results = searchResults.data.results;
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
