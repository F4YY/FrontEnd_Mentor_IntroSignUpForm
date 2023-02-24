import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Styledform,
    InputWrapper,
    IconError,
    InputboxFirstname,
    InputboxLastname,
    InputboxEmail,
    InputboxPassword,
    Buttonclaimtrial,
    Termservices
} from './styled/Introsignup.styled';
import iconerror from './images/icon-error.svg';

export const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },

      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'First name must be 15 characters or less')
          .required('First name cannot be empty'),
        lastName: Yup.string()
          .max(20, 'Last name must be 20 characters or less')
          .required('Last name cannot be empty'),
        email: Yup.string().email('Looks like this is not an email').required('Email cannot be empty'),
        password: Yup.string()
          .max(15, 'Must be 10 characters or less')
          .required('Password cannot be empty'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
});

return (
    <Styledform onSubmit={formik.handleSubmit}>
        <InputWrapper>
            <InputboxFirstname
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                style={formik.errors.firstName && formik.touched.firstName && {
                        color: "hsl(0, 100%, 74%)",
                        borderColor: "hsl(0, 100%, 74%)",
                        borderWidth: '2px',
                       }}
            />
            {formik.touched.firstName && formik.errors.firstName ?
            (<IconError src={iconerror} alt='iconerror'/>) : null}
        </InputWrapper>
        {formik.touched.firstName && formik.errors.firstName ?
        (<h5><em>{formik.errors.firstName}</em></h5>) : null}

        <InputWrapper>
            <InputboxLastname
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                style={formik.errors.lastName && formik.touched.lastName && {
                    color: "hsl(0, 100%, 74%)",
                    borderColor: "hsl(0, 100%, 74%)",
                    borderWidth: '2px',
                   }}
            />
            {formik.touched.lastName && formik.errors.lastName ?
            (<IconError src={iconerror} alt='iconerror'/>) : null}
        </InputWrapper>
        {formik.touched.lastName && formik.errors.lastName ?
        (<h5><em>{formik.errors.lastName}</em></h5>) : null}

        <InputWrapper>
            <InputboxEmail
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={formik.errors.email && formik.touched.email && {
                    color: "hsl(0, 100%, 74%)",
                    borderColor: "hsl(0, 100%, 74%)",
                    borderWidth: '2px',
                   }}
            />
            {formik.touched.email && formik.errors.email ?
            (<IconError src={iconerror} alt='iconerror'/>) : null}
        </InputWrapper>
        {formik.touched.email && formik.errors.email ?
        (<h5><em>{formik.errors.email}</em></h5>) : null}

        <InputWrapper>
            <InputboxPassword
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={formik.errors.password && formik.touched.password && {
                    color: "hsl(0, 100%, 74%)",
                    borderColor: "hsl(0, 100%, 74%)",
                    borderWidth: '2px',
                   }}
            />
            {formik.touched.password && formik.errors.password ?
            (<IconError src={iconerror} alt='iconerror'/>) : null}
        </InputWrapper>
        {formik.touched.password && formik.errors.password ?
        (<h5><em>{formik.errors.password}</em></h5>) : null}

        <Buttonclaimtrial type="submit">Submit</Buttonclaimtrial>
        <Termservices>
            <h4>
                By clicking the button, you are agreeing to our&nbsp;<span>Terms and Services</span>
            </h4>
        </Termservices>
    </Styledform>
    );
};

