import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter your First name'),
  lastName: Yup.string().min(2).max(25).required('Please enter your Last name'),
  email: Yup.string().email().required('Please enter your email'),
  companyName: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter your Company name'),
  role: Yup.string().required('Please Choose your Role'),
  country: Yup.string().required('Please Choose your Country'),
  language: Yup.string().required('Please Choose your Language'),
});

export default SignupSchema;
