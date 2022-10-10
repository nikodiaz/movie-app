import React from 'react';
import Card from '../Card/Card';
import './List.scss';

const List = ({ data, title }) => {
	return (
		<>
			<h2 className='list--title'>{title}</h2>
			<div className='list--container'>
				{!data.loading &&
					data.data.results.map((movie) => {
						return (
							<Card
								key={movie.id}
								data={movie}
								loading={data.loading}
							/>
						);
					})}
			</div>
		</>
	);
};

export default List;
