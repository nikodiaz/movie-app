import PropTypes from 'prop-types';
import { URL_YOUTUBE } from '../store/vars';

const Trailer = ({ youtubeTrailer }) => {
  return (
    <section className="detail-trailers">
      <h2>Trailers</h2>
      <div className="detail-trailers__list">
        {youtubeTrailer.map((trailer) => (
          <iframe
            className="trailer"
            key={trailer.id}
            title={URL_YOUTUBE + trailer.key}
            src={URL_YOUTUBE + trailer.key}
            allowFullScreen
          />
        ))}
      </div>
    </section>
  );
};

Trailer.propTypes = {
  youtubeTrailer: PropTypes.array,
};

export default Trailer;
