import Card from '../components/Card';
import Layout from '../components/Layout/Layout';

const Favorites = ({ favorites }) => {
	return (
		<Layout>
			<div className='favorites'>
				<h1 className='favorites-title'>Favoritos</h1>
				<div className='favorites-movies'>
					<h2>Películas favoritas</h2>
					<div className='favorites-container'>
						{favorites.movies.map((item) => {
							return (
								<Card
									key={item.id}
									data={item}
									loading={item.loading}
								/>
							);
						})}
					</div>
					<h2>Series favoritas</h2>
					<div className='favorites-container'>
						{favorites.tvSeries.map((item) => {
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
			</div>
		</Layout>
	);
};

export default Favorites;
