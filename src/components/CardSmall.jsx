import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GET_IMG, IMG_POSTER_SMALL } from '../store/vars';
import PropTypes from 'prop-types';

function CardSmall({ data }) {
  const media = data.title ? 'movie' : data.name ? 'tv' : 'movie';

  return (
    <Link className="cardSmall" to={`/${media}/${data.id}`}>
      <figure className="cardSmall-poster">
        <img src={GET_IMG + IMG_POSTER_SMALL + data.poster_path} />
      </figure>
      <div className="cardSmall-over">
        <p>{data.title || data.name}</p>
        <p className="rating">
          <AiFillStar />
          <span>{data.vote_average.toFixed(1)}</span>
          <span className="year">
            {' '}
            {data.release_date?.split('-')[0] ||
              data.first_air_date?.split('-')[0]}
          </span>
        </p>
      </div>
    </Link>
  );
}

CardSmall.propTypes = {
  data: PropTypes.object.isRequired,
  media: PropTypes.string,
};

export default CardSmall;
