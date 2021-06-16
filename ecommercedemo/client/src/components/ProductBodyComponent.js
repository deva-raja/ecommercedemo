import React, { useEffect, useState } from 'react';
import { showSellerProducts } from '../api/ProductApi';
import ProductCardComponent from './ProductCardComponent';

function ProductBodyComponent({ sellerId, setProductId }) {
  const [productArray, setProductArray] = useState();

  useEffect(() => {
    async function getData() {
      const product = await showSellerProducts(sellerId);
      setProductArray(product.product);
    }
    getData();
  }, [sellerId]);

  return (
    <div>
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            
              {productArray &&
                productArray.map((product, index) => (
                  <ProductCardComponent key={index} product={product} setProductId={setProductId} />
              ))}
            </div>
          </div>
        
      </section>
    </div>
  );
}

export default ProductBodyComponent;
