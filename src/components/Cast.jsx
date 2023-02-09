import { GET_IMG } from '../store/vars';
import PropTypes from 'prop-types';

const Cast = ({ cast }) => {
  return (
    <div className="casts">
      <h2>Cast</h2>
      <div className="casts--content">
        {cast
          .filter((actor) => actor.profile_path !== null)
          .map((actor) => (
            <div key={actor.cast_id} className="cast--item">
              <img
                src={GET_IMG + 'w154' + actor.profile_path}
                alt={actor.name}
              />
              <div>
                <p>{actor.name}</p>
                <small>{actor.character}</small>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default Cast;
