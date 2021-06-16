import React from 'react';

import { useFormik } from 'formik';

export default function AddSeller() {
    const validate = values => {

        const errors = {};
        if (!values.Name) {

            errors.Name = 'Required';

        } else if (values.Name.length > 15) {

            errors.Name = 'Must be 15 characters or less';

        }
        if (!values.info) {

            errors.info = 'Required';

        } else if (values.info.length < 5) {

            errors.info = 'Must be 5 characters or more';

        }

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

            info: '',

            img: '',

        },

        validate,

        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));

        },

    });
    return (
        <div className="text-center">
            <h1>Enter Seller Details</h1>
            
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="Name">Seller Name</label>

                <input

                    id="Name"

                    name="Name"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.firstName}

                />

                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                <br /> <br />

                <label htmlFor="info">Info</label>

                <input

                    id="info"

                    name="info"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.info}

                />

                {formik.errors.info ? <div>{formik.errors.info}</div> : null}

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
