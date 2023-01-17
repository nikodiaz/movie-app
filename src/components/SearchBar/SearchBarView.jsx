import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

const SearchBarView = ({ onSubmit, onClick, search, onChange }) => {
  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className="search-bar-container">
        <input
          type="text"
          className="search-bar--input"
          placeholder="Search..."
          name="keyword"
          onChange={onChange}
          value={search}
        />
        <button type="submit" className="search-bar--btn" onClick={onClick}>
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>
    </div>
  );
};

SearchBarView.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  search: PropTypes.string,
};

export default SearchBarView;
