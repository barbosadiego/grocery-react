import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

import './Card.scss';

export default function Card({ item, cartBtn = false, linkBtn = true }) {
  const { addItemToCart } = useContext(GlobalContext);

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
      {cartBtn && (
        <Link to="/cart">
          <button className="btn" onClick={() => addItemToCart(item)}>
            add to cart
          </button>
        </Link>
      )}
    </div>
  );
}
