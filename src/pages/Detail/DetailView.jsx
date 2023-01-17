import Hero from '../../components/Hero';
import PropTypes from 'prop-types';
import { GET_IMG, IMG_POSTER_ORIGINAL, URL_YOUTUBE } from '../../store/vars';

function DetailView({ movie, cast, youtubeTrailer }) {
  return (
    <div className="detail">
      <section className="detail-description">
        <Hero data={movie} />
        <div className="detail-description__overview">
          <div className="casts">
            <h2>Casts</h2>
            <div className="casts--content">
              {cast
                .filter((actor) => actor.popularity >= 20)
                .map((actor) => (
                  <div key={actor.id} className="cast--item">
                    <img
                      src={GET_IMG + IMG_POSTER_ORIGINAL + actor.profile_path}
                      alt={actor.name}
                    />
                    <h3>{actor.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

DetailView.propTypes = {
  movie: PropTypes.object.isRequired,
  cast: PropTypes.array.isRequired,
  youtubeTrailer: PropTypes.array.isRequired,
};

export default DetailView;
