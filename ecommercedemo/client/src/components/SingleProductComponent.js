import React, { useEffect, useState } from 'react';
import { showSingleProduct } from '../api/ProductApi';

function SingleProductComponent({ productId, setCartProducts }) {
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    async function getData() {
      const product = await showSingleProduct(productId);
      setSelectedProduct(product.product[0]);
    }
    getData();
  }, [productId]);

  const handleClick = () => {
    console.log(selectedProduct._id, 'selecrepro');
    setCartProducts((state) => [...state, selectedProduct._id]);
  };

  return (
    <div>
      {selectedProduct && (
        <section className='py-5'>
          <div className='container px-4 px-lg-5 my-5'>
            <div className='row gx-4 gx-lg-5 align-items-center'>
              <div className='col-md-6'>
                <img className='card-img-top mb-5 mb-md-0' src={selectedProduct.img} width="800"
                  height="500" alt='...' />
              </div>
              <div className='col-md-6'>
                <div className='small mb-1'> SKU: BST-${selectedProduct.price * 1.5}</div>
                <h1 className='display-5 fw-bolder'>{selectedProduct.name}</h1>
                <div className='fs-5 mb-5'>
                  <span className='text-decoration-line-through'>
                    ${selectedProduct.price * 1.8}
                  </span>
                  <span> ${selectedProduct.price}</span>
                </div>
                <p className='lead'>{selectedProduct.details}</p>
                <div className='d-flex'>
                  <input
                    className='form-control text-center me-3'
                    id='inputQuantity'
                    type='num'
                    value='1'
                    style={{ maxWidth: 48 }}
                  />
                  <button
                    onClick={handleClick}
                    className='btn btn-outline-dark flex-shrink-0'
                    type='button'
                  >
                    <i className='bi-cart-fill me-1'></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SingleProductComponent;
