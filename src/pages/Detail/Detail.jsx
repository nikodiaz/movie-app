// libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// store
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../../store/Slices/movies';
import { fetchCasting } from '../../store/Slices/cast';
import { fetchTrailers } from '../../store/Slices/trailer';

// components
import DetailView from './DetailView';
import { fetchTvDetail } from '../../store/Slices/tv';

function Detail() {
  const { id, media } = useParams();
  const { cast, trailer } = useSelector((state) => state);
  const { detail } = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tv.detail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCasting(id, media));
    dispatch(fetchTrailers(id, media));
    if (media === 'movie') {
      dispatch(fetchDetail(id));
    } else {
      dispatch(fetchTvDetail(id));
    }
  }, [id, dispatch]);

  if (
    (detail.id || tv.id) &&
    (cast.data.movie.cast || cast.data.tv.cast) &&
    trailer.data.results
  ) {
    const youtubeTrailer = trailer.data.results.filter(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    );

    return (
      <DetailView
        youtubeTrailer={youtubeTrailer}
        movie={media === 'tv' ? tv : detail}
        cast={cast.data.movie.cast || cast.data.tv.cast}
      />
    );
  }
}

export default Detail;
