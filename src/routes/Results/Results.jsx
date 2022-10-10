import './Results.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import { API_KEY_ALT, URL_SEARCH } from '../../hooks/vars';
import Button from '../../components/Button/Button';

const Results = ({ title }) => {
	const { search } = useParams();
	const searchResults = useFetch(URL_SEARCH + search + API_KEY_ALT);
	console.log(searchResults);
	const { results } = searchResults.data;
	const navigate = useNavigate();

	const handleBack = () => {
		navigate('/');
	};

	if (!searchResults.loading) {
		return (
			<div className='results'>
				<Button
					text='Back to Home'
					border='none'
					width='10rem'
					onClick={handleBack}
				/>
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
