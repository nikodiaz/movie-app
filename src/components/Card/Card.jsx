import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const baseImg = 'https://image.tmdb.org/t/p/w780';

const Card = ({ data, addOrRemoveFav }) => {
	if (data) {
		const style = {
			backgroundImage: `url(${baseImg}${data.poster_path})`,
		};

		return (
			<Link to={`/movie/${data.id}`}>
				<div
					className='card'
					style={style}
					data-img-url={baseImg + data.poster_path}
				>
					<button
						className='fav--btn'
						data-movie-id={data.id}
						onClick={addOrRemoveFav}
					>
						<AiOutlineStar></AiOutlineStar>
					</button>
					<div className='card--overview'>
						<p className='rating'>
							<AiFillStar />
							{data.vote_average}
						</p>
						<h3 className='card--overview__title'>{data.title}</h3>
					</div>
				</div>
			</Link>
		);
	}
};

export default Card;
