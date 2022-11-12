import { Link } from 'react-router-dom';

import './Card.scss';

export default function Card({ item }) {
  return (
    <div className="item">
      <div className="discount">{item.discountPercentage}%</div>
      <span className="brand">{item.brand}</span>
      <img src={item.thumbnail} alt={item.title} width={90} height={90} />
      <span className="price">US$ {item.price}</span>
      <Link to="/shop">
        <button className="btn">Buy</button>
      </Link>
    </div>
  );
}
