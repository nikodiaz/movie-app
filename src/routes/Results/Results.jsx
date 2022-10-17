import './Results.scss';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import {
	API_KEY,
	API_KEY_ALT,
	BASE_URL,
	DISCOVER_MOVIES_BY_CATEGORY,
	URL_LIST,
	URL_SEARCH,
} from '../../hooks/vars';

const Results = ({ title }) => {
	const { search, category } = useParams();
	const searchResults = useFetch(
		BASE_URL + URL_SEARCH + search + API_KEY_ALT,
	);
	const discoverByCategory = useFetch(
		BASE_URL + URL_LIST + API_KEY + DISCOVER_MOVIES_BY_CATEGORY + category,
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
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export default Results;
