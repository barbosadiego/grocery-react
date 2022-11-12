import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const api = useApi();

  useEffect(() => {
    const getProducts = async () => {
      const data = await api.getItems();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <section className="products container">
      <div className="products__list">
        {products.map((item) => {
          return (
            <div className="products__item" key={item.id}>
              <div className="discount">{item.discountPercentage}%</div>
              {/* <h3 className="title">{item.title}</h3> */}
              <span className="brand">{item.brand}</span>
              <img
                src={item.thumbnail}
                alt={item.title}
                width={90}
                height={90}
              />
              <span className="price">US$ {item.price}</span>
              <Link to="/shop">
                <button className="btn">Buy</button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
