//libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
//store
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from 'store/Slices/movies';
import { fetchCasting } from 'store/Slices/cast';
import { fetchTrailers } from 'store/Slices/trailer';

//components
import DetailView from './DetailView';
import Layout from 'components/Layout/Layout';

const Detail = () => {
	const { id } = useParams();
	const { cast, trailer } = useSelector((state) => state);
	const { detail } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCasting(id));
		dispatch(fetchTrailers(id));
		dispatch(fetchDetail(id));
	}, [id, dispatch]);

	if (detail.id && cast.data.cast && trailer.data.results) {
		let youtubeTrailer = trailer.data.results.filter(
			(trailer) => trailer.site === 'YouTube',
		);

		return (
			<Layout>
				<DetailView
					youtubeTrailer={youtubeTrailer}
					movie={detail}
					cast={cast.data.cast}
				/>
			</Layout>
		);
	}
	return;
};

export default Detail;
