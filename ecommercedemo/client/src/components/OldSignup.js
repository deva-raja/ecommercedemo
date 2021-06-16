import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <p>Signup</p>
      <div style={{ paddingTop: 60 }}>
        <div className='card login-card' style={{ backgroundColor: 'silver' }}>
          <div className='card-body'>
            <h3 className='text-center text-white font-weight-light mb-4'>SIGN UP</h3>
            <form action='/login'>
              <div className='form-group'>
                <input type='text' placeholder='email' className='form-control'></input>
              </div>
              <div>Error</div>
              <div className='form-group'>
                <input type='text' placeholder='Password' className='form-control'></input>
              </div>
              <div>Error</div>
              <input
                type='submit'
                value='Sign up'
                className='btn btn-danger btn-block mb-3'
              ></input>
            </form>
          </div>
        </div>
      </div>
      <Link to='/'>back to home</Link>
    </div>
  );
}

export default Signup;
