import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../contexts/MenuContext';
import './Menu.scss';

const Menu = () => {
  const { showMenu, toggleMenu } = useContext(MenuContext);

  return (
    <nav className={`nav container ${showMenu ? 'active' : ''}`}>
      <div className="btn">browse all categories</div>
      <ul className="nav__links">
        <li>
          <Link onClick={toggleMenu} to="/">
            home
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/shop">
            shop
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/blog">
            blog
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
