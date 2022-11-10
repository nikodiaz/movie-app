import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const NotFound = () => {
	return (
		<Layout>
			<div></div>
			<div>Oops! We're sorry!</div>
			<div>
				Try searching or go to
				<Link to='/'> Home Page</Link>.
			</div>
		</Layout>
	);
};

export default NotFound;
