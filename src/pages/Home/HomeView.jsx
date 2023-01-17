import Categories from '../../components/Categories';
import Slider from '../../components/Slider';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingBox from '../../components/TrendingBox';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/Grid';
import PropTypes from 'prop-types';

const HomeView = ({ trending, popular, genres, setTime, trendTime }) => {
  return (
    <div className="home">
      <>
        <Slider data={popular} />
        <SearchBar />
        <Layout>
          <div className="widgets">
            <Categories>
              {genres.map((genre) => {
                return (
                  <Link
                    to={`/search/${genre.name}/${genre.id}`}
                    key={genre.id}
                    className="tag"
                    data-id={genre.id}
                  >
                    {genre.name}
                  </Link>
                );
              })}
            </Categories>
            <TrendingBox
              trendingList={trending}
              setTime={setTime}
              trendTime={trendTime}
              title="Trending"
            />
            <Grid list={popular} />
          </div>
        </Layout>
      </>
    </div>
  );
};

HomeView.propTypes = {
  trending: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  setTime: PropTypes.func,
  trendTime: PropTypes.string,
};

export default HomeView;
