import React from 'react';
import Card from '../Card/Card';
import './List.scss';

const List = ({ data, section }) => {
	return (
		<div className='list'>
			<h2>
				<i className='bi bi-graph-up-arrow'></i>
				{section}
			</h2>
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
			{/* <Card
				poster={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
				title={data.title}
				year={data.release_date.substring(0, 4)}
			/> */}
		</div>
	);
};

export default List;
