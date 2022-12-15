import React from 'react';
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi';

const Fav = ({ handleClick, movieIsAdded }) => {
	const icon = movieIsAdded ? (
		<HiBookmark className='added' />
	) : (
		<HiOutlineBookmark />
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
