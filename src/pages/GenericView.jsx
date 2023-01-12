import Categories from '../components/Categories';
import Grid from '../components/Grid';
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import TrendingBox from '../components/TrendingBox';
import { Link } from 'react-router-dom';

const GenericView = ({
	genres,
	trending,
	set_time,
	trend_time,
	popular,
	media,
	trend_title,
}) => {
	return (
		<div className='home generic'>
			<SearchBar />
			<Layout>
				<div className='widgets'>
					<Categories>
						{genres.map((genre) => {
							return (
								<Link
									to={`/search/${genre.name}/${genre.id}`}
									key={genre.id}
									className='tag'
									data-id={genre.id}
								>
									{genre.name}
								</Link>
							);
						})}
					</Categories>
					<TrendingBox
						trending_list={trending}
						set_time={set_time}
						trend_time={trend_time}
						title={'Trending ' + trend_title}
					/>
					<Grid list={popular} media={media} />
				</div>
			</Layout>
		</div>
	);
};

export default GenericView;
