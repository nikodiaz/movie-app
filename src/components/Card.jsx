import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Fav from './Fav';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../store/Slices/favs/favsSlice';
import { toast } from 'react-hot-toast';

const baseImg = 'https://image.tmdb.org/t/p/w342/';

const Card = ({ data }) => {
	const favorites = useSelector((state) => state.favs);
	const dispatch = useDispatch();

	const style = {
		backgroundImage: `url(${baseImg}${data.poster_path})`,
	};

	const cardData = {
		id: data.id,
		title: data.title,
		name: data.name,
		poster_path: baseImg + data.poster_path,
		vote_average: data.vote_average,
	};

	const movieIsAdded = favorites.movies.find(
		(movie) => movie.id === cardData.id,
	);
	const tvIsAdded = favorites.tvSeries.find(
		(serie) => serie.id === cardData.id,
	);
	const handleDelete = () => {
		if (cardData.title !== undefined && movieIsAdded) {
			dispatch(removeFav(movieIsAdded));
		} else if (cardData.name !== undefined && tvIsAdded) {
			dispatch(removeFav(tvIsAdded));
		}
		toast('Removido de favoritos!', {
			icon: '👏',
			style: {
				background: '#1d1d1d',
				color: '#fff',
			},
		});
	};
	const handleAdd = () => {
		dispatch(addFav(cardData));
		toast.success('Agregado!', {
			style: {
				background: '#1d1d1d',
				color: '#fff',
			},
		});
	};

	return (
		<article className='card'>
			<Fav
				movieIsAdded={movieIsAdded || tvIsAdded}
				handleClick={
					movieIsAdded || tvIsAdded ? handleDelete : handleAdd
				}
			/>
			<Link to={`/movie/${data.id}`} className='card-link'>
				<div
					className='card-container'
					style={style}
					data-img-url={baseImg + data.poster_path}
				>
					<div className='card-overview'>
						<p className='rating'>
							<AiFillStar />
							{data.vote_average}
							<span className='year'>
								{data.release_date?.split('-')[0] ||
									data.first_air_date?.split('-')[0]}
							</span>
						</p>
						<h3 className='card-overview__title'>
							{data.title || data.name}
						</h3>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default Card;
