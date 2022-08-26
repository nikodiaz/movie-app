import React from 'react';
import './Card.scss';

const Card = ({ poster, title, year }) => {
	return (
		<div className='card'>
			<img src={poster} alt='poster' />
			<div className='card__detail'>
				<div>
					<h3>{title}</h3>
					<p>{year.substring(0, 4)}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
