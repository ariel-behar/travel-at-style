import * as yup from 'yup';

import countries from '@/data/countries.json';
import usStates from '@/data/usStates.json';

export const clientDetailsFormSchemaShape = {
    firstName: yup
        .string()
        .required('First Name is required')
        .min(2, 'First Name should be at least 2 characters long')
        .max(40, 'First Name should be at most 40 characters long'),
    lastName: yup
        .string()
        .required('Last Name is required')
        .min(2, 'Last Name should be at least 2 characters long')
        .max(40, 'Last Name should be at most 40 characters long'),
    email: yup
        .string()
        .required('Email is required')
        .email('Input should be a valid e-mail address'),
    country: yup
        .string()
        .required('Country is required')
        .oneOf(allCountries(), 'Country is not valid'),
    addressOne: yup
        .string()
        .required('Address is required')
        .min(5, 'Address should be at least 5 characters long')
        .max(100, 'Address should be at most 100 characters long'),
    addressTwo: yup
        .string()
        .optional()
        .max(100, 'Address should be at most 100 characters long'),
    city: yup
        .string()
        .required('City is required')
        .min(2, 'City should be at least 2 characters long')
        .max(40, 'City should be at most 40 characters long'),
    state: yup
        .string()
        .when('country', ([country], schema: any) => {
            return country === 'United States'
                ? schema
                    .required('State is required')
                    .oneOf(allUsStates(), 'State is not valid')
                : schema
                    .nullable()
                    .optional()
        }),
    zipCode: yup
        .string()
        .required('Zip Code is required')
        .when('country', ([country], schema: any) => {
            return country === 'United States'
                ? schema.matches(/^[0-9]{5}$/, 'Zip Code should be a 5-digit number')
                : schema.matches(/^[0-9]{3,}$/, 'Zip Code should be at least a 3-digit number and contain only numbers')
        }),
    countryCode: yup
        .string()
        .required('Country Code is required')
        .matches(/^\+[0-9]{1,4}$/, 'Country Code should be a 1-4 digit number'),
    phoneNumber: yup
        .string()
        .required('Phone Number is required')
        .matches(/^[0-9]{6,10}$/, 'Phone Number should be a 6-10 digit number'),
    note: yup
        .string()
        .optional()
        .min(2, 'Note should be at least 2 characters long')
        .max(150, 'Note should be at most 150 characters long'),
}

const clientDetailsFormSchema = yup.object().shape(clientDetailsFormSchemaShape)

function allCountries() {
    let countriesArray = countries.map(country => country.name);

    return countriesArray;
}

function allUsStates() {
    let usStatesArray = usStates.map(state => state.name);

    return usStatesArray;
}

export default clientDetailsFormSchema;