import SearchBar from '../../components/SearchBar/SearchBar';
import PropTypes from 'prop-types';

const ResultsView = ({ children, title }) => {
  return (
    <div className="results">
      <SearchBar />
      <h1 className="results-title">{title}</h1>
      <div className="results-container">{children}</div>
    </div>
  );
};

ResultsView.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};

export default ResultsView;
