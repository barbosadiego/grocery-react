import './Header.scss';

import heart from '../../images/Love.svg';
import shoppingCart from '../../images/ShopCart.svg';
import user from '../../images/User.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">grocery shop</h1>
        <input type="text" placeholder="Search your favorite food" />
        <div className="icons">
          <img src={heart} alt="" />
          <button>
            <img src={shoppingCart} alt="" />
          </button>
          <button>
            <img src={user} alt="" />
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
