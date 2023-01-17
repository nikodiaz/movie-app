import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import useResize from '../hooks/useResize';
import { GET_IMG, IMG_BACKDROP_ORIGINAL } from '../store/vars';
import PropTypes from 'prop-types';

function Hero({ data }) {
  const { width } = useResize();
  useEffect(() => {}, []);
  const backgroundImage = {
    backgroundImage: `url(${GET_IMG + IMG_BACKDROP_ORIGINAL}${
      width > 620 ? data.backdrop_path : data.poster_path
    })`,
  };

  return (
    <section style={backgroundImage} className="hero">
      <div className="hero--overview">
        <h1>{data.title || data.name}</h1>
        <p className="rating">
          <AiFillStar />
          {data.vote_average?.toFixed(1)}
          <span className="media-type">
            {data.title ? 'Movie' : 'Tv Serie'}
          </span>
          <span className="review-counts">{data.vote_count} Reviews</span>
          <span className="premiere">
            {data.release_date || data.first_air_date}
          </span>
        </p>
        <p>{width > 768 ? data.overview : data.overview}</p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
