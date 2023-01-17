import { useEffect, useState } from 'react';
// store
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchMovieGenres,
} from '../../store/Slices/movies';
// component
import HomeView from './HomeView';
import Loader from '../../components/Loader';
import { TIME_DAY, TYPE_ALL } from '../../store/vars';

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, genres } = useSelector((state) => state.movies);
  const [trendTime, setTrendTime] = useState(TIME_DAY);

  useEffect(() => {
    dispatch(fetchTrendingMovies(TYPE_ALL, trendTime));
    dispatch(fetchPopularMovies());
    dispatch(fetchMovieGenres());
  }, [dispatch, trendTime]);

  const handleTrendTime = (e) => {
    setTrendTime(e.target.value);
  };

  return (
    <>
      {loading ? <Loader /> : null}
      {movies.trending.results && movies.popular.results && genres.genres ? (
        <HomeView
          trending={movies.trending.results}
          popular={movies.popular.results}
          genres={genres.genres}
          setTime={handleTrendTime}
          trendTime={trendTime}
        />
      ) : null}
    </>
  );
};

export default Home;
