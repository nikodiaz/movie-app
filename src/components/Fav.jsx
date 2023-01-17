import PropTypes from 'prop-types';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

function Fav({ handleClick, movieIsAdded }) {
  const icon = movieIsAdded ? (
    <BsFillBookmarkFill className="added" />
  ) : (
    <BsBookmark />
  );
  return (
    <button className="fav--btn" onClick={handleClick}>
      <span role="img" aria-label="Favorite">
        {icon}
      </span>
    </button>
  );
}

Fav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  movieIsAdded: PropTypes.object,
};

export default Fav;
