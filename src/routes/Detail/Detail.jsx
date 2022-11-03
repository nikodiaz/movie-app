import './Detail.scss';
import useFetch from '../../hooks/useFetch';
import {
	API_KEY,
	BASE_URL,
	CAST_MAX_NUM,
	IMG_POSTER_SMALL,
	PARAMS_LANG_SPA,
	GET_CAST,
	GET_MOVIE,
	GET_IMG,
	GET_VIDEO,
	URL_YOUTUBE,
} from '../../services/vars';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

const Detail = () => {
	const { id } = useParams();
	const detail = useFetch(
		BASE_URL + GET_MOVIE(id) + API_KEY + PARAMS_LANG_SPA,
	);
	const casts = useFetch(BASE_URL + GET_MOVIE(id) + GET_CAST + API_KEY);
	const trailers = useFetch(BASE_URL + GET_MOVIE(id) + GET_VIDEO + API_KEY);

	if (!detail.loading && !casts.loading && !trailers.loading) {
		const castToShow = casts.data.cast.slice(0, CAST_MAX_NUM);
		let youtubeTrailer = trailers.data.results.filter(
			(trailer) => trailer.site === 'YouTube',
		);

		return (
			<div className='detail'>
				<section className='detail--description'>
					<figure className='detail--poster'>
						<img
							alt='poster'
							src={
								GET_IMG +
								IMG_POSTER_SMALL +
								detail.data.poster_path
							}
						/>
					</figure>
					<div className='detail--overview'>
						<h1>{detail.data.title}</h1>
						<p className='rating'>
							<AiFillStar />
							{detail.data.vote_average.toFixed(1)}
						</p>
						<h4>Overview</h4>
						<p>{detail.data.overview}</p>
						<div className='casts'>
							<h2>Casts</h2>
							<div className='casts--content'>
								{castToShow.map((actor) => (
									<div key={actor.id} className='cast--item'>
										<img
											src={
												GET_IMG +
												IMG_POSTER_SMALL +
												actor.profile_path
											}
											alt={actor.name}
										/>
										<h3>{actor.name}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className='detail--trailers'>
					<h2>Trailers</h2>
					<div className='detail--trailers__list'>
						{youtubeTrailer.map((trailer) => (
							<iframe
								className='trailer'
								key={trailer.id}
								title={URL_YOUTUBE + trailer.key}
								src={URL_YOUTUBE + trailer.key}
								allowFullScreen
							/>
						))}
					</div>
				</section>
			</div>
		);
	}
};

export default Detail;
