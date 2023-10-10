import { NavLink } from 'react-router-dom';
import { nav } from './AppNav.module.css';

function AppNav() {
  return (
    <div className={nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
