import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct, destroyProduct } from '../api/MyProductApi';

function ProductCardComponent({ product, setProductId, setUpdate }) {
   const handleClick = async () => {
      await setProductId(product._id);
      await destroyProduct(product._id);
      setUpdate((state) => !state);
   };

   return (
      <div>
         <div className='col mb-5'>
            <div className='card h-100'>
               <img className='card-img-top' src={product.img} width='50' height='200' alt='...' />
               <div className='card-body p-4'>
                  <div className='text-center'>
                     <h5 className='fw-bolder'>{product.name}</h5>
                     <div className='d-flex justify-content-center small text-warning mb-2'>
                        <div className='bi-star-fill'></div>
                        <div className='bi-star-fill'></div>
                        <div className='bi-star-fill'></div>
                        <div className='bi-star-fill'></div>
                        <div className='bi-star-fill'></div>
                     </div>
                     ${product.price}
                  </div>
                  <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                     <div className='text-center'>
                        <Link
                           onClick={handleClick}
                           className='btn btn-outline-dark mt-auto'
                           to='myproduct'
                        >
                           Delete Product
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductCardComponent;
