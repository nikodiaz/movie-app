import CardSmall from './CardSmall';

const TrendingBox = ({ title, trending_list }) => {
	return (
		<article className='trendingBox'>
			<h3>{title}</h3>
			<div className='trendingBox-timeFilter'>
				<button>Day</button>
				<button>Week</button>
			</div>
			<div className='trendingBox-list'>
				{trending_list &&
					trending_list
						.slice(0, 5)
						.map((item) => <CardSmall key={item.id} data={item} />)}
			</div>
		</article>
	);
};

export default TrendingBox;
