import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ data }) => {
	return (
		<>
			<div className='categories'>
				<h2>Categories</h2>
				<div className='categories--tags'>
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
		</>
	);
};

export default Categories;
