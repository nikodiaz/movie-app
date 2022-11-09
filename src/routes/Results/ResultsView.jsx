import React from 'react';
import Card from '../../components/Card/Card';

const ResultsView = ({ addOrRemoveFav, results, title }) => {
	return (
		<div className='results'>
			<h2 className='results--title'>{title}</h2>
			<div className='results--container'>
				{results.map((item) => {
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

export default ResultsView;
