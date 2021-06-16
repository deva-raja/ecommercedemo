import React from 'react';

import { useFormik } from 'formik';

export default function AddProduct() {
    const validate = values => {

        const errors = {};
        if (!values.Name) {

            errors.Name = 'Required';

        } else if (values.Name.length > 15) {

            errors.Name = 'Must be 15 characters or less';

        }
        if (!values.price) {

            errors.price = 'Required';

        } //else if (values.price.length  5) {

         //   errors.lastName = 'Must be 5 characters or more';

    //    }

        if (!values.img) {

            errors.img = 'Required';

        } else if (values.img.length < 5) {

            errors.img = 'Must be 5 characters or more';

        }

        return errors;

    };
    const formik = useFormik({

        initialValues: {

            Name: '',

            price: '',

            img: '',

        },

        validate,

        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));

        },

    });
    return (
        <div className="text-center">
            <h1>Enter Product Details</h1>
            

<br /><br />



            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="Name">Product Name</label>

                <input

                    id="Name"

                    name="Name"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.Name}

                />

                {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}

                <br /> <br />

                <label htmlFor="price">Price</label>

                <input

                    id="price"

                    name="price"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.price}

                />

                {formik.errors.price ? <div>{formik.errors.price}</div> : null}

                <br /> <br />

                <label htmlFor="img">Image Link</label>

                <input

                    id="img"

                    name="img"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.img}

                />

                {formik.errors.img ? <div>{formik.errors.img}</div> : null}

                <br /> <br />

                <button type="submit">Submit</button>

            </form>
        </div>
    );
}
