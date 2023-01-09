import Categories from '../../components/Categories';
import List from '../../components/List';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingBox from '../../components/TrendingBox';
import Layout from '../../components/Layout/Layout';
// import Hero from 'components/Hero';

const HomeView = ({ trending, popular, genres }) => {
	return (
		<div className='home'>
			<>
				<Slider data={popular} />
				{/* <Hero data={trending} /> */}
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
							title='Trending'
						/>
					</div>
				</Layout>
			</>
		</div>
	);
};

export default HomeView;
