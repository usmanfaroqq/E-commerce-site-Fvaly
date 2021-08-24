import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import React, { useState, useEffect } from 'react';
import { IProduct } from 'Models/types';
import ProductService from 'services/ProductService';
const Home = () => {
  const [product, setProduct] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    ProductService.getProducts().then((res) => setProduct(res));
  }, []);
  return (
    <div>
      <Banner />
      <Products products={product} />
    </div>
  );
};

export default Home;
