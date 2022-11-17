import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './ProductCart.scss';

export default function ProductCart({ item }) {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const { totalSpend, setTotalSpend } = useContext(CartContext);

  useEffect(() => {
    setPrice(qty * item.price);
    console.log(totalSpend);
  }, [qty]);

  useEffect(() => {
    setQty(item.qty);
    setPrice(qty * item.price);
    // setTotalSpend(sumTotal(item.price));
    console.log(totalSpend);
  }, []);

  function sumTotal(value) {
    const sum = [];
    sum.push(value);
    console.log('sum');
    return sum;
  }

  function additionItem(price) {
    setQty((old) => old + 1);
    setTotalSpend([...totalSpend, price]);
  }

  function subtractionItem(price) {
    if (qty === 0) return false;
    setQty((old) => old - 1);
    setTotalSpend([...totalSpend, -price]);
  }

  return (
    <div className="data">
      <div className="item">
        <div className="product">
          <img className="item-img" src={item.thumbnail} alt={item.title} />
          <span className="brand">{item.title}</span>
          <p className="desc">{item.description}</p>
        </div>
        {/* <input
          className="qty"
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        /> */}
        <div className="qty">
          <button className="qty-btn" onClick={() => additionItem(item.price)}>
            +
          </button>
          <span className="qty-total">{qty}</span>
          <button
            className="qty-btn"
            onClick={() => subtractionItem(item.price)}
          >
            -
          </button>
        </div>
        <div className="price">{item.price}</div>
        <div className="price-total">{price}</div>
      </div>
    </div>
  );
}
