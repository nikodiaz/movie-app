import PropTypes from 'prop-types';
import Layout from './Layout/Layout';

function List({ title, children }) {
  return (
    <Layout>
      <h3 className="list--title">{title}</h3>
      <section className="list--container">{children}</section>
    </Layout>
  );
}

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default List;
