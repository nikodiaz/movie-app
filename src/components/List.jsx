import PropTypes from 'prop-types';

function List({ title, children }) {
  return (
    <>
      <h3 className="list--title">{title}</h3>
      <section className="list--container">{children}</section>
    </>
  );
}

List.propTypes = {
  title: PropTypes.string,
};

export default List;
