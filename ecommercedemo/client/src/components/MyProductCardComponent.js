import React from 'react';
import { Link } from 'react-router-dom';

function ProductCardComponent({ product, setProductId }) {
    const handleClick = () => {
        setProductId(product._id);
    };


    return (
        <div>
            <div className='col mb-5'>
                <div className='card h-100'>
                    <img className='card-img-top' src={product.img} alt='...' />
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
                                    to='productItem'
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
