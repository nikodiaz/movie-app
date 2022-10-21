import { NavLink } from 'react-router-dom';
//assets
import { MdMenu, MdStar, MdHome } from 'react-icons/md';
//style
import './NavBar.scss';
import { useState } from 'react';

const NavBar = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const styleMenu = {
		transform: `${!displayMenu ? 'translateX(-375px)' : 'translateX(0)'}`,
	};
	const styleNav = {
		transform: `${!displayMenu ? 'translateX(0)' : 'translateX(-50px)'}`,
	};

	return (
		<>
			<header className='navbar' style={styleNav}>
				<MdMenu onClick={() => setDisplayMenu(!displayMenu)} />
				<nav>
					<ul>
						<li className='nav--item' title='Home'>
							<NavLink to='/'>
								<MdHome />
							</NavLink>
						</li>
						<li className='nav--item' title='Favorites'>
							<NavLink to='/favorites'>
								<MdStar />
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<aside className='navbar--menu' style={styleMenu}>
				<MdMenu onClick={() => setDisplayMenu(!displayMenu)} />
				<nav>
					<ul>
						<li className='nav--item' title='Home'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='nav--item' title='Favorites'>
							<NavLink to='/favorites'>Favoritos</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		</>
	);
};

export default NavBar;
