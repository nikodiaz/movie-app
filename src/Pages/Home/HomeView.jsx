import Categories from '../../components/Categories';
import List from '../../components/List';
import Slider from '../../components/Slider';

const HomeView = ({ trending, popular, genres, addOrRemoveFav }) => {
	return (
		<div style={{ position: 'relative' }}>
			<>
				<Slider data={trending} />
				<Categories data={genres} />
				<List
					data={popular}
					title='Discover Movies'
					addOrRemoveFav={addOrRemoveFav}
				/>
			</>
		</div>
	);
};

export default HomeView;
