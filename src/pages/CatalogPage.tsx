import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../card/Card';
import type { ProductType } from '../types/Product-type';

const CatalogPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductType[]>('http://localhost:8000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((product: ProductType) => (
        <div className='card' key={product._id}>
          <Card
            title={product.title}
            price={product.price}
            image={product.image}
            isFavorite={product.isFavorite}
            rating={product.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default CatalogPage;
