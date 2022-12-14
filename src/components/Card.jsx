import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Fav from './Fav';

const baseImg = 'https://image.tmdb.org/t/p/w780';

const Card = ({ data, addOrRemoveFav }) => {
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
					<Fav id={data.id} />
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
