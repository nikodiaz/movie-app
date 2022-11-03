import React from 'react';
import Card from '../Card/Card';
import './List.scss';

const List = ({ data, title, addOrRemoveFav }) => {
	return (
		<>
			<h2 className='list--title'>{title}</h2>
			<div className='list--container'>
				{data.map((movie) => {
					return (
						<Card
							key={movie.id}
							data={movie}
							addOrRemoveFav={addOrRemoveFav}
						/>
					);
				})}
			</div>
		</>
	);
};

export default List;
