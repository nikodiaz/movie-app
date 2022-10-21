import React, { useState } from 'react';
import './Slider.scss';
import leftArrow from '../../assets/Icon/Chevron-Left.svg';
import rightArrow from '../../assets/Icon/Chevron-Right.svg';
import star from '../../assets/Icon/Star Fill.svg';
import { Link } from 'react-router-dom';

const baseImg = 'https://image.tmdb.org/t/p/original';

const Slider = ({ data, loading }) => {
	const [current, setCurrent] = useState(0);

	if (!loading) {
		const starscount = data.results[current].vote_average.toFixed(1);
		const nextSlide = () => {
			setCurrent(current === items.length - 1 ? 0 : current + 1);
		};
		const prevSlide = () => {
			setCurrent(current === 0 ? items.length - 1 : current - 1);
		};
		const items = data.results.slice(0, 5);
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
					<img src={leftArrow} alt='previous' />
				</span>
				<section className='slider' style={style}>
					<div className='slider--overview'>
						<h1>
							{items[current].media_type === 'movie'
								? items[current].title
								: items[current].name}
						</h1>
						<p className='rating'>
							<img src={star} alt='rating' />
							{starscount}
						</p>
						<p>{items[current].overview.substring(0, 100)}...</p>
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
					<img src={rightArrow} alt='next' />
				</span>
			</>
		);
	}
};

export default Slider;
