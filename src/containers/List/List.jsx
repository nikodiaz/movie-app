import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './List.scss';

const List = ({ data, section }) => {
	return (
		<div className='list'>
			<div className='list-header'>
				<h2>
					<i className='bi bi-graph-up-arrow'></i>
					{section}
				</h2>
				<Button classList='see-all' text='See all' />
			</div>
			{data !== undefined &&
				data.map((item) => {
					return (
						<Card
							key={item.id}
							poster={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
							title={item.title}
							year={item.release_date}
						/>
					);
				})}
		</div>
	);
};

export default List;
