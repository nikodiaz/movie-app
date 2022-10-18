import React from 'react';
import Card from '../../components/Card/Card';

const Favorites = ({ favorites, title, addOrRemoveFav }) => {
	console.log(favorites);
	return (
		<div className='results'>
			<h2 className='results--title'>{title}</h2>
			<div className='results--container'>
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
	);
};

export default Favorites;
