import React from 'react';
import { NavLink } from 'react-router-dom';
//assets
import logo from '../../assets/logo.svg';
import home from '../../assets/Icon/Home.svg';
// import movies from '../../assets/Icon/Movie.svg';
// import series from '../../assets/Icon/TV.svg';
import star from '../../assets/Icon/Star Stroke.svg';
//style
import './NavBar.scss';

const NavBar = () => {
	return (
		<aside className='navbar'>
			<figure>
				<img src={logo} alt='logo' />
			</figure>
			<nav>
				<ul>
					<li className='nav--item' title='Home'>
						<NavLink to='/'>
							<img src={home} alt='icon' />
						</NavLink>
					</li>
					{/* <li className='nav--item' title='Movies'>
						<NavLink to='/movies'>
							<img src={movies} alt='icon' />
						</NavLink>
					</li> */}
					<li className='nav--item' title='Favorites'>
						<NavLink to='/favorites'>
							<img src={star} alt='icon' />
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default NavBar;
