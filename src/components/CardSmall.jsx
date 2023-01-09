import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GET_IMG, IMG_POSTER_SMALL } from '../store/vars';

const CardSmall = ({ data }) => {
	return (
		<div className='cardSmall'>
			<figure className='cardSmall-poster'>
				<img src={GET_IMG + IMG_POSTER_SMALL + data.poster_path} />
			</figure>
			<div className='cardSmall-over'>
				<p>{data.title || data.name}</p>
				<p className='rating'>
					<AiFillStar />
					<span>{data.vote_average.toFixed(1)} </span>
					<span>{data.release_date.split('-')[0]}</span>
				</p>
			</div>
		</div>
	);
};

export default CardSmall;
