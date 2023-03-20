import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from 'formik';
import { sendSignInLinkToEmail } from 'firebase/auth';
import styles from '../App.module.css';
import SignupSchema from '../YupSchema';
import { auth } from '../firebase';

const intialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  role: '',
  country: '',
  language: '',
};

function Signupform() {
  const roleList = [
    { id: 1, value: 'Role' },
    { id: 2, value: 'Agency / Partner Developer' },
    { id: 3, value: 'Hobbyist' },
    { id: 4, value: 'Professional Developer' },
    { id: 5, value: 'Student' },
    { id: 6, value: 'Technology / Business manager' },
    { id: 7, value: 'Other' },
  ];
  const languageList = [
    { id: 1, value: 'Select a Language' },
    { id: 2, value: 'Ruby' },
    { id: 3, value: 'Python' },
    { id: 4, value: 'Java' },
    { id: 5, value: 'PHP' },
    { id: 6, value: 'Scala' },
    { id: 7, value: 'Nodejs' },
    { id: 8, value: 'Closure' },
    { id: 9, value: 'Go' },
    { id: 10, value: 'I use another language' },
    { id: 11, value: 'I am not a developer' },
  ];
  const [emailsent, setEmailsent] = useState(false);
  const [verified, setVerified] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const onChange = () => {
    setVerified(true);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: intialValues,
      validationSchema: SignupSchema,
      onSubmit: (formValues, { resetForm, setSubmitting }) => {
        console.log(formValues);
        handleSubmitClick();
        setSubmitting(false);
        resetForm({ values: intialValues });
      },
    });

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, values.email, {
        url: 'http://localhost:3000/signupsuccess',
        handleCodeInApp: true,
      }).then(() => {
        localStorage.setItem('emailForSignIn', values.email);
      });
      setEmailsent(true);
      console.log('email sent');
    } catch (error) {
      alert(error.message || error);
    }
    console.log(values);
  };

  const formErrors = Object.entries(errors).map((value) => (
    <ul className={styles['form-error-items']}>
      <li>{value[1]}</li>
    </ul>
  ));

  return (
    <div className={styles['signup-form-container']}>
      {touched && Object.entries(errors).length > 0 ? (
        <div className={styles['form-errors']}>{formErrors}</div>
      ) : null}
      <div className={styles['signup-form']}>
        {emailsent ? (
          <div className={styles['form-success']}>
            <h2>Success!</h2>
            <p>
              We have sent you an email with a link to complete your sign up.
              Please check your inbox.
            </p>
          </div>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="firstName">First Name</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <input
              type="name"
              autoComplete="off"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="lastName">Last Name</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <input
              id="lastName"
              type="name"
              autoComplete="off"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="email">Email Address</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="firstName">First Name</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <input
              type="name"
              autoComplete="off"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="role">Role</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <select
              name="role"
              id="role"
              placeholder="Role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {roleList.map((role) => (
                <option
                  key={role.id}
                  value={role.value}
                >
                  {role.value}
                </option>
              ))}
              ,
            </select>
          </div>

          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="country">Country</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <select
              placeholder="Country / Region"
              name="country"
              id="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="country">Country / Region</option>
              {options.map((country) => (
                <option
                  key={country.label}
                  value={country.label}
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles['form-item']}>
            <div className={styles.label}>
              <label htmlFor="language">Primary Development Language</label>
              <span style={{ color: 'red' }}>*</span>
            </div>
            <select
              name="language"
              id="language"
              placeholder="Select a Language"
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {languageList.map((language) => (
                <option
                  key={language.id}
                  value={language.value}
                >
                  {language.value}
                </option>
              ))}
            </select>
          </div>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
            className={styles.recaptcha}
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={!verified}
            onClick={handleSubmitClick}
          >
            CREATE AN ACCOUNT
          </button>
        </form>
        <p className={styles.details}>
          Signing up signifies that you have read and agree to the
          <a href="/">Terms of Service</a>
          and our
          <a href="/">Privacy Policy.</a>
          <a href="/">Cookie Preferences.</a>
        </p>
      </div>
    </div>
  );
}

export default Signupform;
