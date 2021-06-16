import {Link} from 'react-router-dom';
import React from 'react';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';

const SignupForm = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password:'',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            history.push("/layout");
            console.log(values);
        },
    });
    return (
        <div className='login'>
            <form onSubmit={formik.handleSubmit} className='login-form'>
                <h1>Loggin Page</h1>
                <input id="email"
                       placeholder='Email-Address'
                       type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input id="password"
                       placeholder='New-Password'
                       type="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="submit-btn">Submit</button>
                <Link to="/register" className="Link">Register a new Account</Link>
            </form>
        </div>
    );
};
export default SignupForm;

