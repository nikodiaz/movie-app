import useResize from '../hooks/useResize';
import { GET_IMG, IMG_BACKDROP_ORIGINAL } from '../store/vars';
import PropTypes from 'prop-types';

function Hero({ data, children }) {
  const { width } = useResize();
  const backgroundImage = {
    backgroundImage: `url(${GET_IMG + IMG_BACKDROP_ORIGINAL}${
      width > 620 ? data.backdrop_path : data.poster_path
    })`,
  };

  return (
    <section style={backgroundImage} className="hero">
      {children}
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default Hero;
