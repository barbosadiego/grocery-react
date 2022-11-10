import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <nav className="nav container">
      <div className="btn">browse all categories</div>
      <ul className="nav__links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
