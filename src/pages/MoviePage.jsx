import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import {
  fetchMovieGenres,
  fetchPopularMovies,
  fetchTrendingMovies,
} from '../store/Slices/movies';
import { TIME_DAY, TYPE_MOVIE } from '../store/vars';
import GenericView from './GenericView';

const MoviePage = () => {
  const dispatch = useDispatch();
  const [trendTime, setTrendTime] = useState(TIME_DAY);
  const { loading, movies, genres } = useSelector((state) => state.movies);

  const handleTrendTime = (e) => {
    setTrendTime(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies(TYPE_MOVIE, trendTime));
    dispatch(fetchMovieGenres());
  }, [trendTime]);

  return (
    <div>
      {loading ? <Loader /> : null}
      {movies.popular.results && movies.trending.results && genres.genres ? (
        <GenericView
          popular={movies.popular.results}
          trending={movies.trending.results}
          genres={genres.genres}
          setTime={handleTrendTime}
          trendTime={trendTime}
          media={'movie'}
          trendTitle="Movies"
        />
      ) : null}
    </div>
  );
};

export default MoviePage;
