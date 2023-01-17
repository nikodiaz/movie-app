import Card from '../components/Card';
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {
  return (
    <Layout>
      <div className="favorites">
        <SearchBar />
        <h1 className="favorites-title">Favoritos</h1>
        <div className="favorites-movies">
          <h2>Películas favoritas</h2>
          <div className="favorites-container">
            {favorites.movies.length > 0 ? (
              favorites.movies.map((item) => {
                return (
                  <Card key={item.id} data={item} loading={item.loading} />
                );
              })
            ) : (
              <h3>No tienes películas agregadas! Busca algunas!</h3>
            )}
          </div>
          <h2>Series favoritas</h2>
          <div className="favorites-container">
            {favorites.tvSeries.length > 0 ? (
              favorites.tvSeries.map((item) => {
                return (
                  <Card key={item.id} data={item} loading={item.loading} />
                );
              })
            ) : (
              <h3>No tienes series agregadas! Busca algunas!</h3>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.object,
};

export default Favorites;
