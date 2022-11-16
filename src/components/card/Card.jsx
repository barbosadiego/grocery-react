import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import './Card.scss';

export default function Card({ item, cartBtn = false, linkBtn = true }) {
  const { addItemToCart } = useContext(CartContext);
  const [msg, setMsg] = useState(false);

  function handleClick(item) {
    addItemToCart(item);
    setMsg(!msg);
    setTimeout(() => {
      setMsg(false);
    }, 500);
  }

  return (
    <div className="item">
      <div className="discount">{item.discountPercentage}%</div>
      <span className="brand">{item.brand}</span>
      <img src={item.thumbnail} alt={item.title} width={90} height={90} />
      <span className="price">US$ {item.price}</span>
      {linkBtn && (
        <Link to="/shop">
          <button className="btn">buy</button>
        </Link>
      )}
      <div className={`msg ${msg ? 'active' : ''}`}>item added!</div>
      {cartBtn && (
        <button className="btn" onClick={() => handleClick(item)}>
          add to cart
        </button>
      )}
    </div>
  );
}
