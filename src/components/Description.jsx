import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GET_IMG, IMG_POSTER_ORIGINAL } from '../store/vars';
import StreamService from './StreamService';
import PropTypes from 'prop-types';
import useResize from '../hooks/useResize';

const Description = ({ data, setPlaying }) => {
  const { width } = useResize();
  return (
    <div className="hero--overview">
      <div className="poster">
        <img
          src={GET_IMG + IMG_POSTER_ORIGINAL + data.poster_path}
          width={'300px'}
        />
      </div>
      <div>
        <h1>{data.title || data.name}</h1>
        <p className="rating">
          <AiFillStar />
          {data.vote_average?.toFixed(1)}
          <span className="media-type">
            {data.title ? 'Movie' : 'Tv Serie'}
          </span>
          <span className="premiere">
            {data.release_date?.substring(0, 4) ||
              data.first_air_date?.substring(0, 4)}
          </span>
          <button className="play" onClick={() => setPlaying(true)}>
            Watch Trailer
          </button>
        </p>
        <p>{width > 768 ? data.overview : data.overview}</p>
        {data.genres && (
          <div className="categories-tags">
            {data.genres.map((genre) => {
              return (
                <div key={genre.id} className="tag">
                  {genre.name}
                </div>
              );
            })}
          </div>
        )}
        {data.name && <StreamService data={data} />}
      </div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.object.isRequired,
  setPlaying: PropTypes.func,
};

export default Description;
