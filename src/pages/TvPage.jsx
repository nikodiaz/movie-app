import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import {
	fetchPopularTv,
	fetchTrendTv,
	fetchTvGenres,
} from '../store/Slices/tv';
import { TIME_DAY } from '../store/vars';
import GenericView from './GenericView';

const TvPage = () => {
	const dispatch = useDispatch();
	const [trendTime, setTrendTime] = useState(TIME_DAY);
	const { loading, series, genres } = useSelector((state) => state.tv);

	const handleTrendTime = (e) => {
		setTrendTime(e.target.value);
	};

	useEffect(() => {
		dispatch(fetchPopularTv());
		dispatch(fetchTrendTv(trendTime));
		dispatch(fetchTvGenres());
	}, [trendTime]);
	return (
		<div>
			{loading ? <Loader /> : null}
			{series.popular.results && series.trend.results && genres.genres ? (
				<GenericView
					popular={series.popular.results}
					trending={series.trend.results}
					genres={genres.genres}
					set_time={handleTrendTime}
					trend_time={trendTime}
					media={'Tv'}
					trend_title={'Tv Series'}
				/>
			) : null}
		</div>
	);
};

export default TvPage;
