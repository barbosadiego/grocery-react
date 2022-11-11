import { useContext, useEffect, useState } from 'react';
import { isMobile } from '../../utilities';
import { MenuContext } from '../../contexts/MenuContext';

import Menu from '../menu/Menu';

import heart from '../../images/Love.svg';
import shoppingCart from '../../images/ShopCart.svg';
import user from '../../images/User.svg';

import './Header.scss';

const Header = () => {
  const [mobile, setMobile] = useState();
  const winWidht = window.matchMedia('(max-width: 768px)');
  const { toggleMenu } = useContext(MenuContext);

  function screenTest(e) {
    console.log(e);
    if (e.matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    winWidht.addEventListener('change', screenTest);
    setMobile(isMobile());
  }, []);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">grocery shop</h1>

        {!mobile && (
          <>
            <input type="text" placeholder="Search your favorite food" />
            <div className="icons">
              <button className="btn">
                <img src={heart} alt="" />
              </button>
              <button className="btn">
                <img src={shoppingCart} alt="" />
              </button>
              <button className="btn">
                <img src={user} alt="" />
              </button>
            </div>
          </>
        )}

        {mobile && (
          <div>
            <button className="btn" onClick={toggleMenu}>
              Menu
            </button>
          </div>
        )}
      </div>

      <hr />

      <Menu />
    </header>
  );
};

export default Header;
