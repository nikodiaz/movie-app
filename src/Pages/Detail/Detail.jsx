//libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
//store
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../../store/Slices/detail/thunks';
import { fetchCasting } from '../../store/Slices/cast/thunks';
import { fetchTrailers } from '../../store/Slices/trailer/thunks';

//components
import DetailView from './DetailView';
import Layout from '../../components/Layout/Layout';

const Detail = () => {
	const { id } = useParams();
	const { detail, cast, trailer } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCasting(id));
		dispatch(fetchTrailers(id));
		dispatch(fetchDetail(id));
	}, [id]); //eslint-disable-line

	if (detail.data.id && cast.data.cast && trailer.data.results) {
		let youtubeTrailer = trailer.data.results.filter(
			(trailer) => trailer.site === 'YouTube',
		);

		return (
			<Layout>
				<DetailView
					youtubeTrailer={youtubeTrailer}
					movie={detail.data}
					cast={cast.data.cast}
				/>
			</Layout>
		);
	}
	return;
};

export default Detail;
