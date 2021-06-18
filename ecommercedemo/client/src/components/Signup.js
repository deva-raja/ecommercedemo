import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../api/UserApi';
import { useHistory } from 'react-router-dom';

function Signup({ sellerId }) {
   const [serverError, setServerError] = useState();
   const history = useHistory();

   const createUserSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
   });

   const initialValues = {
      email: '',
      password: '',
   };

   const onSubmit = async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const data = await createUser(values);

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

   return (
      <div className='text-center'>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={createUserSchema}
         >
            {({ errors, touched, isSubmitting, values }) => (
               <Form className='form' id='a-form'>
                  <h2 className='form_title title'> User Sign up</h2>
                  <br />
                  <br />
                  <Field className='form__input' name='email' placeholder='Email' />
                  {serverError && serverError.error && (
                     <div className='form-error'>{serverError.error}</div>
                  )}
                  {touched.email && errors.email && (
                     <div className='form-error'>{errors.email}</div>
                  )}
                  <br />
                  <br />
                  <Field className='form__input' name='password' placeholder='Password' />
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
                     Sign Up
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default Signup;
