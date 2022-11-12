import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import Card from '../card/Card';
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

  console.log(products);

  return (
    <section className="products container">
      <div className="products__list">
        {products.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Products;
