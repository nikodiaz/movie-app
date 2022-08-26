import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './NavBar.scss';

const NavBar = () => {
	return (
		<aside className='aside__menu'>
			<img src={logo} alt='logo' className='logo' />
			<nav>
				<ul>
					<li>
						<NavLink to='/browse'>
							<i className='bi bi-compass'></i>
							Browse
						</NavLink>
					</li>
					<li>
						<NavLink to='/trends'>
							<i className='bi bi-graph-up-arrow'></i>
							Trends
						</NavLink>
					</li>
					<li>
						<NavLink to='/community'>
							<i className='bi bi-globe'></i>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/series'>
							<i className='bi bi-tv'></i>
							Series
						</NavLink>
					</li>
					<li>
						<NavLink to='/movies'>
							<i className='bi bi-film'></i>
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink to='/categories'>
							<i className='bi bi-columns-gap'></i>
							Categories
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default NavBar;
