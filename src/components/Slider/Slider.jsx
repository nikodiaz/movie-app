import React, { useEffect, useState } from 'react';
import { getPopular } from '../../services/fetchers';
import Card from '../Card/Card';
import './Slider.scss';

const Slider = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [current, setCurrent] = useState(0);
	const slideItems = popularMovies.slice(0, 5);
	const length = slideItems.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		console.log(current);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		console.log(current);
	};

	useEffect(() => {
		getPopular(1, setPopularMovies);
	}, []);

	if (popularMovies.length === 0) return null;

	return (
		<>
			<section className='slider'>
				<h2>Popular Movies</h2>
				{popularMovies.length > 0 && (
					<div>
						<span onClick={prevSlide} className='left-arrow'>
							<i className='bi bi-chevron-left'></i>
						</span>
						<span onClick={nextSlide} className='right-arrow'>
							<i className='bi bi-chevron-right'></i>
						</span>
						{slideItems.map((item, idx) => {
							return (
								<div
									key={item.id}
									className={
										idx === current
											? 'slide active'
											: 'slide'
									}
								>
									{idx === current && (
										<Card
											key={item.id}
											poster={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
											title={item.title}
											year={item.release_date}
										/>
									)}
								</div>
							);
						})}
					</div>
				)}
			</section>
		</>
	);
};

export default Slider;
