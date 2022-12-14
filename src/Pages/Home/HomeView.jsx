import Categories from '../../components/Categories';
import List from '../../components/List';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

const HomeView = ({ trending, popular, genres, addOrRemoveFav }) => {
	return (
		<div style={{ position: 'relative' }}>
			<>
				<Slider data={trending} />
				<Categories>
					{genres.map((genre) => {
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
				</Categories>
				<List title='Discover Movies' addOrRemoveFav={addOrRemoveFav}>
					{popular.map((movie) => {
						return (
							<Card
								key={movie.id}
								data={movie}
								addOrRemoveFav={addOrRemoveFav}
							/>
						);
					})}
				</List>
			</>
		</div>
	);
};

export default HomeView;
