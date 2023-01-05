import useResize from '../hooks/useResize';
import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GET_IMG, IMG_BACKDROP_ORIGINAL } from '../store/vars';

const Hero = ({ data }) => {
	const { width } = useResize();
	useEffect(() => {}, []);
	const backgroundImage = {
		backgroundImage: `url(${GET_IMG + IMG_BACKDROP_ORIGINAL}${
			width > 620 ? data.backdrop_path : data.poster_path
		})`,
	};
	return (
		<section style={backgroundImage} className='hero'>
			<div className='hero--overview'>
				<h1>{data.title ? data.title : data.name}</h1>
				<p className='rating'>
					<AiFillStar />
					{data.vote_average.toFixed(1)}
					<span>{data.title ? 'Movie' : 'Tv Serie'}</span>
				</p>
				<p>{width > 768 ? data.overview : data.overview}</p>
			</div>
		</section>
	);
};

export default Hero;
