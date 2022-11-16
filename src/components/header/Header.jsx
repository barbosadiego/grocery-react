import { useContext, useEffect, useState } from 'react';
import { isMobile } from '../../utilities';
import { MenuContext } from '../../contexts/MenuContext';
import { GlobalContext } from '../../contexts/GlobalContext';

import Menu from '../menu/Menu';

import heart from '../../images/Love.svg';
import shoppingCart from '../../images/ShopCart.svg';
import user from '../../images/User.svg';

import './Header.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const [mobile, setMobile] = useState();
  const winWidht = window.matchMedia('(max-width: 768px)');
  const { toggleMenu } = useContext(MenuContext);
  const { handleShopModal, handleAppActive } = useContext(GlobalContext);
  const { cart } = useContext(CartContext);

  function screenTest(e) {
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

  function handleModal() {
    handleAppActive();
    handleShopModal();
  }

  function handleMenu() {
    toggleMenu();
    handleAppActive();
  }

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
              <button className="btn cart-icon" onClick={handleModal}>
                <img src={shoppingCart} alt="" />
                <span className="total">{cart.length}</span>
              </button>
              <button className="btn">
                <img src={user} alt="" />
              </button>
            </div>
          </>
        )}

        {mobile && (
          <div>
            <button className="btn" onClick={handleMenu}>
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
