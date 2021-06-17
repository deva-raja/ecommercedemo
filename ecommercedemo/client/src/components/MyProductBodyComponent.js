import React, { useEffect, useState } from 'react';
import { showSellerProducts } from '../api/ProductApi';
import MyProductCardComponent from './MyProductCardComponent';
import { Link } from 'react-router-dom';

function MyProductBodyComponent({ sellerId, setProductId }) {
    const [productArray, setProductArray] = useState();
    const sellerIdd ="60c2112f682213cc21289eb8";
    const handleClick = () => {
    };
    useEffect(() => {
        async function getData() {
            const product = await showSellerProducts(sellerIdd);
            setProductArray(product.product);
        }
        getData();
    }, [sellerIdd]);

    return (
        <div>
            <section className='py-5'>
                <div className='container px-4 px-lg-5 mt-5'>
                    <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>

                        {productArray &&
                            productArray.map((product, index) => (
                                <MyProductCardComponent key={index} product={product} setProductId={setProductId} />
                            ))}
                <div className='col mb-5'>
                    <div className='card h-100'>
                        <img className='card-img-top' src="https://cdn.store-assets.com/s/160552/f/5670463.jpeg" width="50"
                            height="200" alt='...' />
                        <div className='card-body p-4'>
                            <div className='text-center'>
                                <h5 className='fw-bolder'>New Product</h5>
                                <div className='d-flex justify-content-center small text-warning mb-2'>
                                    <div className='bi-star-fill'></div>
                                    <div className='bi-star-fill'></div>
                                    <div className='bi-star-fill'></div>
                                    <div className='bi-star-fill'></div>
                                    <div className='bi-star-fill'></div>
                                </div>
                $0
                            </div>
                            <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                                <div className='text-center'>
                                    <Link
                                        onClick={handleClick}
                                        className='btn btn-outline-dark mt-auto'
                                        to='addproduct'
                                    >
                                        Add Product
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

export default MyProductBodyComponent;
