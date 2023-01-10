import Categories from '../../components/Categories';
import Slider from '../../components/Slider';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingBox from '../../components/TrendingBox';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/Grid';

const HomeView = ({ trending, popular, genres, set_time, trend_time }) => {
	return (
		<div className='home'>
			<>
				<Slider data={popular} />
				<SearchBar />
				<Layout>
					<div className='home-widgets'>
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
							title='Trending'
						/>
						<Grid list={popular} />
					</div>
				</Layout>
			</>
		</div>
	);
};

export default HomeView;
