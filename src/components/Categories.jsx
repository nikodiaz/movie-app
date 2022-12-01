import { Link } from 'react-router-dom';
import Layout from './Layout/Layout';

const Categories = ({ data }) => {
	return (
		<Layout>
			<div className='categories'>
				<h2>Categories</h2>
				<div className='categories-tags'>
					{data.map((genre) => {
						return (
							<Link
								to={`/${genre.name}/${genre.id}`}
								key={genre.id}
								className='tag'
								data-id={genre.id}
							>
								{genre.name}
							</Link>
						);
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Categories;
