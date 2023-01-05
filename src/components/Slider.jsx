import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import useResize from '../hooks/useResize';

const baseImg = 'https://image.tmdb.org/t/p/original';

const Slider = ({ data }) => {
	const [current, setCurrent] = useState(0);
	const { width } = useResize();

	const items = data.slice(0, 5);
	const nextSlide = () => {
		setCurrent(current === items.length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? items.length - 1 : current - 1);
	};
	const style = {
		backgroundImage: `url(${baseImg}${
			width > 768
				? items[current].backdrop_path
				: items[current].poster_path
		})`,
	};
	return (
		<article className='slider'>
			<span onClick={prevSlide} className='arrow arrow-left'>
				<IoIosArrowBack />
			</span>
			<section className='slider-container' style={style}>
				<div className='slider--overview'>
					<h1>
						{items[current].media_type === 'movie'
							? items[current].title
							: items[current].name}
					</h1>
					<p className='rating'>
						<AiFillStar />
						{data[current].vote_average.toFixed(1)}
						<span>
							{data[current].title ? 'Movie' : 'Tv Serie'}
						</span>
					</p>
					<p>
						{width > 768
							? items[current].overview.substring(0, 210)
							: items[current].overview.substring(0, 80)}
						...
					</p>

					<Link to={`/movie/${items[current].id}`}>Details</Link>
				</div>
			</section>
			<span onClick={nextSlide} className='arrow arrow-right'>
				<IoIosArrowForward />
			</span>
		</article>
	);
};
export default Slider;
