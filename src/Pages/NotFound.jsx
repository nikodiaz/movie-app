import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import page_not_found from '../assets/page_not_found.svg';

const NotFound = () => {
	return (
		<Layout>
			<div className='not-found'>
				<div className='not-found__img'>
					<img src={page_not_found} alt='Page Not Found' />
				</div>
				<div className='not-found__msg'>
					<h2>Oops! We're sorry!</h2>
					<h4 className='home__link'>
						Try searching or go to
						<Link to='/'> Home Page</Link>.
					</h4>
				</div>
			</div>
		</Layout>
	);
};

export default NotFound;
