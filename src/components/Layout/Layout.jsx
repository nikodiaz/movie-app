import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
