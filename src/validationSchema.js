import * as Yup from "yup";

export const validationSchema = Yup.object({
    name:   Yup.string()
            .min(2,'Name must be at least 2 characters')
            .max(20, 'Name must be at most 20 characters')
            .required('Name can not be empty'),
    email:  Yup.string()
            .email('Enter valid email address')
            .required('Email can not be empty'),
    password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password can not be empty'),
    confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password can not be empty')
})