import Categories from '../../components/Categories';
import List from '../../components/List';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
// import Hero from 'components/Hero';

const HomeView = ({ trending, popular, genres }) => {
	return (
		<div style={{ position: 'relative' }}>
			<>
				<Slider data={trending} />
				{/* <Hero data={trending} /> */}
				<SearchBar />
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
				<List title='Discover Movies'>
					{popular.map((movie) => {
						return <Card key={movie.id} data={movie} />;
					})}
				</List>
			</>
		</div>
	);
};

export default HomeView;
