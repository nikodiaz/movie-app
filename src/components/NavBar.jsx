import { NavLink } from 'react-router-dom';
// assets
import {
  HiOutlineHome,
  HiOutlineBookmark,
  HiOutlineFilm,
} from 'react-icons/hi';
import { FaTv } from 'react-icons/fa';

function NavBar() {
  return (
    <aside className="navbar">
      <nav>
        <ul>
          <li className="nav--item" title="Home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link__active' : ' nav-link'
              }
            >
              <HiOutlineHome />
              <small>Home</small>
            </NavLink>
          </li>
          <li className="nav--item" title="Movies">
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive ? 'nav-link__active' : ' nav-link'
              }
            >
              <HiOutlineFilm />
              <small>Movies</small>
            </NavLink>
          </li>
          <li className="nav--item" title="Home">
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                isActive ? 'nav-link__active' : ' nav-link'
              }
            >
              <FaTv />
              <small>Tv</small>
            </NavLink>
          </li>
          <li className="nav--item" title="Favorites">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? 'nav-link__active' : ' nav-link'
              }
            >
              <HiOutlineBookmark />
              <small>Favorites</small>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
