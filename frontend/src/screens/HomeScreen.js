import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    featchData();
  }, []);

  return (
    <div>
      <h1> Featured Salads</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
