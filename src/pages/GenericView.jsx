import Categories from '../components/Categories';
import Grid from '../components/Grid';
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import TrendingBox from '../components/TrendingBox';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GenericView = ({
  genres,
  trending,
  setTime,
  trendTime,
  popular,
  media,
  trendTitle,
}) => {
  return (
    <div className="home generic">
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
            title={'Trending ' + trendTitle}
            media={media}
          />
          <Grid list={popular} media={media} />
        </div>
      </Layout>
    </div>
  );
};

GenericView.propTypes = {
  trending: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  setTime: PropTypes.func,
  trendTime: PropTypes.string,
  media: PropTypes.string,
  trendTitle: PropTypes.string,
};

export default GenericView;
