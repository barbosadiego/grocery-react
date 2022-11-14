import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { MenuContext } from '../../contexts/MenuContext';
import './Menu.scss';

const Menu = () => {
  const { showMenu, toggleMenu } = useContext(MenuContext);
  const { disable } = useContext(GlobalContext);

  function handleClick() {
    toggleMenu();
    disable();
  }

  return (
    <nav className={`nav container ${showMenu ? 'active' : ''}`}>
      <div className="btn">browse all categories</div>
      <ul className="nav__links">
        <li>
          <Link onClick={handleClick} to="/">
            home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/shop">
            shop
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/blog">
            blog
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
