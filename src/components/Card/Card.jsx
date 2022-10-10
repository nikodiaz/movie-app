import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import star from '../../assets/Icon/Star Fill.svg';

const baseImg = 'https://image.tmdb.org/t/p/w780';

const Card = ({ data, loading, category }) => {
	if (!loading) {
		const starscount = data.vote_average;
		const style = {
			backgroundImage: `url(${baseImg}${data.poster_path})`,
		};
		return (
			<Link to=''>
				<div className='card' style={style}>
					<div className='card--overview'>
						<p className='rating'>
							<img src={star} alt='rating' />
							{starscount}
						</p>
						<h3>{data.title}</h3>
					</div>
				</div>
			</Link>
		);
	}
};

export default Card;
