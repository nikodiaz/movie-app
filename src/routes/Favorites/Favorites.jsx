import './Favorites.scss';
import Card from '../../components/Card/Card';

const Favorites = ({ favorites, addOrRemoveFav }) => {
	return (
		<div className='favorites'>
			<h1 className='favorites--title'>Favoritos</h1>
			<div className='favorites--movies'>
				<h2>Películas favoritas</h2>
				<div className='favorites--container'>
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
	);
};

export default Favorites;
