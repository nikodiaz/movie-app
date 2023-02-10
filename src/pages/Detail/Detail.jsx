// libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// store
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail, fetchSimilarMovies } from '../../store/Slices/movies';
import { fetchCasting } from '../../store/Slices/cast';
import { fetchTrailers } from '../../store/Slices/trailer';

// components
import DetailView from './DetailView';
import { fetchSimilarTv, fetchTvDetail } from '../../store/Slices/tv';

function Detail() {
  const { id, media } = useParams();
  const { cast, trailer } = useSelector((state) => state);
  const { detail, movies } = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tv);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCasting(id, media));
    dispatch(fetchTrailers(id, media));
    if (media === 'movie') {
      dispatch(fetchDetail(id));
      dispatch(fetchSimilarMovies(id));
    } else {
      dispatch(fetchTvDetail(id));
      dispatch(fetchSimilarTv(id));
    }
  }, [id, dispatch]);

  if (
    (detail.id || tv.detail.id) &&
    (cast.data.movie.cast || cast.data.tv.cast) &&
    trailer.data.results
  ) {
    const youtubeTrailer = trailer.data.results.filter(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    );

    return (
      <DetailView
        youtubeTrailer={youtubeTrailer}
        movie={media === 'tv' ? tv.detail : detail}
        cast={cast.data.movie.cast || cast.data.tv.cast}
        similar={
          media === 'tv' ? tv.series.similar.results : movies.similar.results
        }
      />
    );
  }
}

export default Detail;
