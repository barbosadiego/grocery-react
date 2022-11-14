import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card/Card';
import useApi from '../hooks/useApi';

import './Shop.scss';

const Shop = () => {
  const api = useApi();
  const [items, setItems] = useState([]);

  async function getProducts() {
    const data = await api.getItems();
    setItems(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="header">
            <h1>shop</h1>
            <Link to="/cart" className="btn">
              View Cart
            </Link>
          </div>

          <div className="items">
            {items.map((item) => {
              return (
                <Card
                  item={item}
                  key={item.id}
                  linkBtn={false}
                  cartBtn={true}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
