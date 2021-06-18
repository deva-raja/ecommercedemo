import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import { createProduct } from '../api/MyProductApi';

function AddProduct() {
   const history = useHistory();
   const [serverError, setServerError] = useState();

   const createProductSchema = Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      price: Yup.string().min(0, 'Too Short!').max(5, 'Too Long!').required('Required'),
      img: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
      sellerId: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
   });

   const initialValues = {
      name: '',
      price: '',
      img: '',
      sellerId: '60cc00261b6c13c15737a020',
   };

   const onSubmit = async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const data = await createProduct(values);
      console.log({ data });

      if (data.data) {
         setSubmitting(false);
         resetForm();
         return history.push('/myproduct');
      }

      if (data.error) {
         setServerError(data);
         return setSubmitting(false);
      }
   };

   return (
      <div className='container text-center'>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={createProductSchema}
         >
            {({ errors, touched, isSubmitting, values }) => (
               <Form className='form' id='a-form'>
                  <h2 className='form_title title'>Add Product</h2>
                  <br />
                  <br />
                  <Field className='form__input' name='name' placeholder='Name' />
                  {touched.name && errors.name && <div className='form-error'>{errors.name}</div>}
                  <br />
                  <br />
                  <Field className='form__input' name='price' placeholder='Price' />
                  {touched.price && errors.price && (
                     <div className='form-error'>{errors.price}</div>
                  )}
                  <br />
                  <br />
                  <Field className='form__input' name='img' placeholder='image' />
                  {touched.img && errors.img && <div className='form-error'>{errors.img}</div>}
                  <br />
                  <br />

                  <button
                     disabled={isSubmitting}
                     type='submit'
                     className='form__button button submit message-button'
                  >
                     add
                  </button>
                  {serverError && <div>{serverError}</div>}
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default AddProduct;
