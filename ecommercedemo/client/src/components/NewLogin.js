import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../api/UserApi';

function Login() {
  const [serverError, setServerError] = useState();
  const history = useHistory();

  const userSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = await loginUser(values);

    if (data.data) {
      setSubmitting(false);
      resetForm();
      return history.push('/seller');
    }

    if (data.error) {
      setServerError(data);
      return setSubmitting(false);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div>
      <div class="login hide-login">
        <form class="login-container hide-form" method="POST" action="login">
          <img src="https://image.flaticon.com/icons/png/512/2922/2922532.png" alt="" />
          <div class="input-container hide-section">
            <p><input type="email" placeholder="Email" name="email" /></p>
            {serverError && serverError.error && (
            <div className='form-error'>{serverError.error.email}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}
               <p><input type="password" placeholder="Password" name="password" /></p>
               {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.password}</div>
            )}
            {touched.password && errors.password && (
              <div className='form-error'>{errors.password}</div>
            )}
               <button
              disabled={isSubmitting}
              type='submit'
              className='form__button button submit message-button'
            >
            Login
            </button>
            </div>
            <p>
              new User -<Link to='/signup'>signup</Link>
            </p>
         </form>
      </div>
    </div>
  );
}

export default Login;
