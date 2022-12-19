import React from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

const Fav = ({ handleClick, movieIsAdded }) => {
	const icon = movieIsAdded ? (
		<BsFillBookmarkFill className='added' />
	) : (
		<BsBookmark />
	);
	return (
		<button className='fav--btn' onClick={handleClick}>
			<span role='img' aria-label='Favorite'>
				{icon}
			</span>
		</button>
	);
};

export default Fav;
