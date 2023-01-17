import { TIME_DAY, TIME_WEEK } from '../store/vars';
import CardSmall from './CardSmall';
import PropTypes from 'prop-types';

function TrendingBox({ title, trendingList, trendTime, setTime, media }) {
  return (
    <article className="trendingBox">
      <h3>{title}</h3>
      <div className="trendingBox-timeFilter">
        <button
          value={TIME_DAY}
          onClick={setTime}
          className={trendTime === TIME_DAY ? 'active' : ''}
        >
          Day
        </button>
        <button
          value={TIME_WEEK}
          onClick={setTime}
          className={trendTime === TIME_WEEK ? 'active' : ''}
        >
          Week
        </button>
      </div>
      <div className="trendingBox-list">
        {trendingList &&
          trendingList.map((item) => (
            <CardSmall key={item.id} data={item} media={media} />
          ))}
      </div>
    </article>
  );
}

TrendingBox.propTypes = {
  title: PropTypes.string,
  trendingList: PropTypes.array.isRequired,
  trendTime: PropTypes.string,
  setTime: PropTypes.func,
  media: PropTypes.string,
};

export default TrendingBox;
