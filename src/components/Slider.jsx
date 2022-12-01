import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const baseImg = 'https://image.tmdb.org/t/p/original';

const Slider = ({ data }) => {
	const [current, setCurrent] = useState(0);

	const items = data.slice(0, 5);
	const nextSlide = () => {
		setCurrent(current === items.length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? items.length - 1 : current - 1);
	};
	const style = {
		backgroundImage: `url(${baseImg}${
			window.innerWidth > 768
				? items[current].backdrop_path
				: items[current].poster_path
		})`,
	};
	return (
		<>
			<span onClick={prevSlide} className='arrow arrow-left'>
				<IoIosArrowBack />
			</span>
			<section className='slider' style={style}>
				<div className='slider--overview'>
					<h1>
						{items[current].media_type === 'movie'
							? items[current].title
							: items[current].name}
					</h1>
					<p className='rating'>
						<AiFillStar />
						{data[current].vote_average.toFixed(1)}
					</p>
					<p>{items[current].overview.substring(0, 220)}...</p>
					<div className='slider--status'>
						<span
							onClick={() => setCurrent(0)}
							className={current === 0 ? 'active' : ''}
						></span>
						<span
							onClick={() => setCurrent(1)}
							className={current === 1 ? 'active' : ''}
						></span>
						<span
							onClick={() => setCurrent(2)}
							className={current === 2 ? 'active' : ''}
						></span>
						<span
							onClick={() => setCurrent(3)}
							className={current === 3 ? 'active' : ''}
						></span>
						<span
							onClick={() => setCurrent(4)}
							className={current === 4 ? 'active' : ''}
						></span>
					</div>
					<Link to={`/movie/${items[current].id}`}>Details</Link>
				</div>
			</section>
			<span onClick={nextSlide} className='arrow arrow-right'>
				<IoIosArrowForward />
			</span>
		</>
	);
};
export default Slider;
