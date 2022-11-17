import { useContext } from 'react';
import ProductCart from '../components/product-cart/ProductCart';
import { CartContext } from '../contexts/CartContext';

import './CartPage.scss';

const CartPage = () => {
  const { cart, totalSpend } = useContext(CartContext);

  const totalDisplay = totalSpend.reduce((acc, item) => acc + item, 0);

  return (
    <section className="cart-page container">
      <div className="cart-page__header">
        <h2>My Cart</h2>
        <h2>
          Total:{' '}
          {totalDisplay.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h2>
      </div>
      {cart.length === 0 && <h3>No items to show</h3>}
      {cart.length !== 0 && (
        <div className="table">
          <div className="title">
            <h3>product</h3>
            <h3>qty</h3>
            <h3>price (US$)</h3>
            <h3>total per item (US$)</h3>
          </div>
          {cart.map((item, index) => (
            <ProductCart item={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CartPage;
