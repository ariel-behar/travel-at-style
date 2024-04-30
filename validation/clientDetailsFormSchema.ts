import * as yup from 'yup';

export const clientDetailsFormSchemaShape = {
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name should be at least 2 characters long')
        .max(40, 'Name should be at most 40 characters long'),
    email: yup
        .string()
        .required('Email is required')
        .email('Input should be a valid e-mail address'),
    // subject: yup
    //     .string()
    //     .required('Subject is required')
    //     .min(5, 'Subject should be at least 5 characters long')
    //     .max(40, 'Subject should be at most 40 characters long'),
    // message: yup
    //     .string()
    //     .required('Message is required')
    //     .min(10, 'Subject should be at least 10 characters long')
    //     .max(150, 'Subject should be at most 150 characters long'),
}

const clientDetailsFormSchema = yup.object().shape(clientDetailsFormSchemaShape)

export default clientDetailsFormSchema;