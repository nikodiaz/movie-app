//libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//store
import { fetchCast, fetchDetail, fetchTrailers } from '../../redux/actions';
//components
import DetailView from './DetailView';
//api querys
import {
	API_KEY,
	BASE_URL,
	PARAMS_LANG_SPA,
	GET_CAST,
	GET_MOVIE,
	GET_VIDEO,
} from '../../services/vars';
import Layout from '../../components/Layout/Layout';

const Detail = () => {
	const { id } = useParams();
	const { movie, cast, trailers } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCast(BASE_URL + GET_MOVIE(id) + GET_CAST + API_KEY));
		dispatch(fetchTrailers(BASE_URL + GET_MOVIE(id) + GET_VIDEO + API_KEY));
		dispatch(
			fetchDetail(BASE_URL + GET_MOVIE(id) + API_KEY + PARAMS_LANG_SPA),
		);
	}, [id]); //eslint-disable-line

	if (movie.data.id && cast.data.cast && trailers.data.results) {
		let youtubeTrailer = trailers.data.results.filter(
			(trailer) => trailer.site === 'YouTube',
		);

		return (
			<Layout>
				<DetailView
					youtubeTrailer={youtubeTrailer}
					movie={movie.data}
					cast={cast.data.cast}
				/>
			</Layout>
		);
	}
	return;
};

export default Detail;
