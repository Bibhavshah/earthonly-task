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
      onSubmit: (value, { resetForm }) => {
        console.log(value);
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
  };

  return (
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
          <label htmlFor="firstName">First Name</label>
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
          {errors.firstName && touched.firstName ? (
            <p className={styles['form-error']}>{errors.firstName}</p>
          ) : null}
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="lastName">Last Name</label>
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
          {errors.lastName && touched.lastName ? (
            <p className={styles['form-error']}>{errors.lastName}</p>
          ) : null}
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="email">Email Address</label>
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
          {errors.email && touched.email ? (
            <p className={styles['form-error']}>{errors.email}</p>
          ) : null}
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="companyName">Company Name</label>
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
          {errors.companyName && touched.companyName ? (
            <p className={styles['form-error']}>{errors.companyName}</p>
          ) : null}
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            placeholder="Role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="role">Role</option>
            <option value="agency">Agency / Partner Developer</option>
            <option value="hobbyist">Hobbyist</option>
            <option value="developer">Professional Developer</option>
            <option value="student">Student</option>
            <option value="technology">Technology / Business manager</option>
            <option value="other">Other</option>
          </select>
          {errors.role && touched.role ? (
            <p className={styles['form-error']}>{errors.role}</p>
          ) : null}
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="country">Country</label>
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
          {errors.country && touched.country ? (
            <p className={styles['form-error']}>{errors.country}</p>
          ) : null}
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="language">Primary Development Language</label>
          <select
            name="language"
            id="language"
            placeholder="Select a Language"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="language">Select a Language</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="node">Node.js</option>
            <option value="java">Java</option>
            <option value="clojure">Clojure</option>
            <option value="scala">Scala</option>
            <option value="go">Go</option>
            <option value="other">I use another language</option>
            <option value="none">I&apos;m not a developer</option>
          </select>
          {errors.language && touched.language ? (
            <p className={styles['form-error']}>{errors.language}</p>
          ) : null}
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
  );
}

export default Signupform;
