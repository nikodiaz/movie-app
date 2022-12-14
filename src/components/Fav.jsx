import React from 'react';
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi';

const Fav = ({ isAdded, id }) => {
	const handleClick = () => {
		alert(id);
	};

	return (
		<button className='fav--btn' onClick={handleClick}>
			<span role='img' aria-label='Favorite'>
				{isAdded ? <HiBookmark /> : <HiOutlineBookmark />}
			</span>
		</button>
	);
};

export default Fav;
