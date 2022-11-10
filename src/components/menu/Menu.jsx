import './Menu.scss';

const Menu = () => {
  return (
    <nav className="nav container">
      <div className="btn">browse all categories</div>
      <ul className="nav__links">
        <li>home</li>
        <li>about</li>
        <li>shop</li>
        <li>blog</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
