import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi';

const baseImg = 'https://image.tmdb.org/t/p/w780';

const Card = ({ data, addOrRemoveFav, loading }) => {
	const favsMovies = JSON.parse(localStorage.getItem('favsMovies'));
	const isAdded = favsMovies.some((item) => Number(item.id) === data.id);

	if (data) {
		const style = {
			backgroundImage: `url(${baseImg}${data.poster_path})`,
		};

		return (
			<Link to={`/movie/${data.id}`}>
				<div
					className='card'
					style={style}
					data-img-url={baseImg + data.poster_path}
				>
					<button
						className='fav--btn'
						data-movie-id={data.id}
						onClick={addOrRemoveFav}
					>
						{isAdded ? <HiBookmark /> : <HiOutlineBookmark />}
					</button>
					<div className='card-overview'>
						<p className='rating'>
							<AiFillStar />
							{data.vote_average}
						</p>
						<h3 className='card-overview__title'>{data.title}</h3>
					</div>
				</div>
			</Link>
		);
	}
};

export default Card;
