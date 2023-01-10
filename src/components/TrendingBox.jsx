import { TIME_DAY, TIME_WEEK } from '../store/vars';
import CardSmall from './CardSmall';

const TrendingBox = ({ title, trending_list, trend_time, set_time }) => {
	return (
		<article className='trendingBox'>
			<h3>{title}</h3>
			<div className='trendingBox-timeFilter'>
				<button
					value={TIME_DAY}
					onClick={set_time}
					className={trend_time === TIME_DAY ? 'active' : ''}
				>
					Day
				</button>
				<button
					value={TIME_WEEK}
					onClick={set_time}
					className={trend_time === TIME_WEEK ? 'active' : ''}
				>
					Week
				</button>
			</div>
			<div className='trendingBox-list'>
				{trending_list &&
					trending_list.map((item) => (
						<CardSmall key={item.id} data={item} />
					))}
			</div>
		</article>
	);
};

export default TrendingBox;
