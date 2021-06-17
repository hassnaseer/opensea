import {Link} from 'react-router-dom';
import React from 'react';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';
import {login} from "../../Utils";

function LoginPage  () {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            login();
            // alert(JSON.stringify(values, null, 2));
            history.push("/layout");
            console.log(values);
        },

    });
    return (
        <div className='login'>
            <form onSubmit={formik.handleSubmit}
                  className='login-form'>
                <h1>Loggin Page</h1>
                <input id="email"
                       placeholder='Email-Address'
                       type="email" {...formik.getFieldProps('email')}
                />
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
export default LoginPage;

