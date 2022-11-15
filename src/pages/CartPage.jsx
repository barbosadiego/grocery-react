import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import ProductCart from '../components/product-cart/ProductCart';

import './CartPage.scss';

const CartPage = () => {
  const { state } = useContext(GlobalContext);

  return (
    <section className="cart-page container">
      <h2>My Cart</h2>
      {state.shopCart.length === 0 && <h3>No items to show</h3>}
      {state.shopCart.length !== 0 && (
        <div className="table">
          <div className="title">
            <h3>product</h3>
            <h3>qty</h3>
            <h3>price (US$)</h3>
          </div>
          {state.shopCart.map((item, index) => (
            <ProductCart item={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CartPage;
