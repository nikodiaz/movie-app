import React from 'react';
//Components
import SearchBar from '../SearchBar/SearchBar';
//import Avatar from '../Avatar/Avatar';

//Styles
import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<SearchBar />
			{/* <Avatar /> */}
		</header>
	);
};

export default Header;
