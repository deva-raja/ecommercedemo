import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';

function NavbarComponent({ setCartProducts, cartProducts }) {
  const [page, setPage] = useState('login');
  const location = useLocation();

  console.log(cartProducts, 'cart');

  const handleLogout = () => {
    setCartProducts([]);
    localStorage.clear();
  };

  useEffect(() => {
    const user = localStorage.getItem('user') || null;
    const pageLoad = async () => {
      const response = await jwtAuthCheck({ user });
      setPage(response);
    };
    pageLoad();
  }, [location.pathname]);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container px-4 px-lg-5'>
        <Link to='/' className='navbar-brand'>
          <strong>Epool Project</strong>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                login
              </Link>
            </li>

            {/* conditionally check if to display logout or not  */}
            {page === 'user' && (
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={handleLogout}>
                  log out
                </Link>
              </li>
            )}
          </ul>
          <Link className='d-flex' to='/cart'>
            <button className='btn btn-outline-light bg-dark' >
              <i className='bi-cart-fill me-1'></i>
              <strong>Cart</strong>
              <span className='badge bg-dark text-white ms-1 rounded-pill'>
                {cartProducts.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
