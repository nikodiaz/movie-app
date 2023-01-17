import PropTypes from 'prop-types';

function Categories({ children }) {
  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="categories-tags">{children}</div>
    </div>
  );
}

Categories.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Categories;
