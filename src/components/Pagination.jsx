import PropTypes from 'prop-types';

function Pagination({ page, totalPages, prev, next }) {
  return (
    <div className="pagination">
      <button title="Previous 20 movies" onClick={prev}>
        Prev
      </button>
      <div>
        {page}
        <span> / </span>
        {totalPages}
      </div>
      <button title="Next 20 movies" onClick={next}>
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  prev: PropTypes.func,
  next: PropTypes.func,
};

export default Pagination;
