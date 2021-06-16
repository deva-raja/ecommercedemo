import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../api/UserApi';

function Login({ sellerId }) {
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
    <div className='text-center'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={userSchema}>
        {({ errors, touched, isSubmitting, values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title' style={{paddingTop:25}}>Customer Login Form</h2>
            <br />
            <Field className='form__input'  name='email' placeholder='Email' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.email}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}
            <br />
            <br />
            <Field className='form__input' name='password' placeholder='Password' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.password}</div>
            )}
            {touched.password && errors.password && (
              <div className='form-error'>{errors.password}</div>
            )}
            <br />
            <br />
            <button
              disabled={isSubmitting}
              type='submit' 
              className='form__button button submit message-button'
            >
              Login
            </button>
            <br />
          </Form>
        )}
      </Formik>
      <p>
        <br />
        new User -<Link to='/signup'>signup</Link>
      </p>
      <p>
        <br />
        <Link to='/sellerlogin'>Seller Login</Link>--<Link to='/sellersignup'>Create Seller Account</Link>
      </p>
    </div>    
  );
}

export default Login;
