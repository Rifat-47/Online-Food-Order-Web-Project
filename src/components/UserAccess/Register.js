import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const handleRegisterSubmit = (values) => {
        // Handle registration logic here
        console.log(values);
    };

    return (
        <div className='registerForm'>
            <h3>Register</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegisterSubmit}
            >
                <Form>
                    {/* Email field */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    {/* Password field */}
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    {/* Confirm Password field */}
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register;