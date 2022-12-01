import Card from '../components/Card';
import Layout from '../components/Layout/Layout';

const Favorites = ({ favorites, addOrRemoveFav }) => {
	return (
		<Layout>
			<div className='favorites'>
				<h1 className='favorites-title'>Favoritos</h1>
				<div className='favorites-movies'>
					<h2>Películas favoritas</h2>
					<div className='favorites-container'>
						{favorites.map((item) => {
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
			</div>
		</Layout>
	);
};

export default Favorites;
