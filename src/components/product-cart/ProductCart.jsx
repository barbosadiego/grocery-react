import { useEffect, useState } from 'react';
import './ProductCart.scss';

export default function ProductCart({ item }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(qty * item.price);
  }, [qty]);

  return (
    <div className="data">
      <div className="item">
        <div className="product">
          <img className="item-img" src={item.thumbnail} alt={item.title} />
          <span className="brand">{item.title}</span>
          <p className="desc">{item.description}</p>
        </div>
        <input
          className="qty"
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <div className="price">{price}</div>
      </div>
    </div>
  );
}
