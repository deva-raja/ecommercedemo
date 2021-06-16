import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';

function SellerCardComponent({ seller, setSellerId }) {
  const history = useHistory();

  const handleClick = async () => {
    setSellerId(seller._id);
    const user = localStorage.getItem('user') || null;
    const response = await jwtAuthCheck({ user });
    console.log(response);
    if (response === 'user') {
      return history.push('/product');
    }
    return history.push('/login');
  };

  return (
    <div>
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img className='card-img-top' src={seller.img} width="200"
                  height="200" alt='...' />

                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>{seller.name}</h5>
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <div className='bi-star-fill'></div>
                      <div className='bi-star-fill'></div>
                      <div className='bi-star-fill'></div>
                      <div className='bi-star-fill'></div>
                      <div className='bi-star-fill'></div>
                    </div>
                    {seller.info}
                  </div>
                  <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div className='text-center'>
                      <Link
                        onClick={handleClick}
                        className='btn btn-outline-dark mt-auto'
                        to='productItem'
                      >
                        Go to Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SellerCardComponent;
