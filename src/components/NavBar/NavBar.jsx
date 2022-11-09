import { NavLink } from 'react-router-dom';
//assets
import { MdStar, MdHome } from 'react-icons/md';
//style
import './NavBar.scss';

const NavBar = () => {
	return (
		<aside className='navbar'>
			<nav>
				<ul>
					<li className='nav--item' title='Home'>
						<NavLink to='/'>
							<MdHome />
							<small>Home</small>
						</NavLink>
					</li>
					<li className='nav--item' title='Favorites'>
						<NavLink to='/favorites'>
							<MdStar />
							<small>Favorites</small>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default NavBar;
