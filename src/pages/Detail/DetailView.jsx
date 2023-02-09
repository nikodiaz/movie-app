import Hero from '../../components/Hero';
import PropTypes from 'prop-types';
import { GET_IMG, IMG_POSTER_ORIGINAL } from '../../store/vars';
import Cast from '../../components/Cast';
import { AiFillStar } from 'react-icons/ai';
import useResize from '../../hooks/useResize';
import Trailer from '../../components/Trailer';
import StreamService from '../../components/StreamService';
import Categories from '../../components/Categories';

function DetailView({ movie, cast, youtubeTrailer }) {
  const { width } = useResize();
  const genrePosition = {
    position: `${movie.title ? 'static' : 'absolute'}`,
  };

  return (
    <div className="detail">
      <section className="detail-description">
        <div className="detail-description__overview">
          <Hero data={movie} />
          <div className="hero--overview">
            <div>
              <img
                src={GET_IMG + IMG_POSTER_ORIGINAL + movie.poster_path}
                width={'300px'}
              />
            </div>
            <div>
              <h1>{movie.title || movie.name}</h1>
              <p className="rating">
                <AiFillStar />
                {movie.vote_average?.toFixed(1)}
                <span className="media-type">
                  {movie.title ? 'Movie' : 'Tv Serie'}
                </span>
                <span className="premiere">
                  {movie.release_date?.substring(0, 4) ||
                    movie.first_air_date?.substring(0, 4)}
                </span>
              </p>
              <p>{width > 768 ? movie.overview : movie.overview}</p>
              {movie.name && <StreamService data={movie} />}
              {movie.genres && (
                <div style={genrePosition}>
                  <Categories>
                    {movie.genres.map((genre) => {
                      return (
                        <div key={genre.id} className="tag">
                          {genre.name}
                        </div>
                      );
                    })}
                  </Categories>
                </div>
              )}
            </div>
          </div>
          {/* <---- CAST ----> */}
          {cast.length > 0 ? <Cast cast={cast} /> : null}
          {/* <---- TRAILER ----> */}
          {youtubeTrailer.length > 0 ? (
            <Trailer youtubeTrailer={youtubeTrailer} />
          ) : null}
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
