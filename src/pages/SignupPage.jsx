import React from 'react';
import { Typography, Button } from 'antd';
import Salesforcelogo from '../assets/Salesforce.png';
import HerokuLogo from '../assets/Heroku.svg';
import styles from '../App.module.css';
import Signup from '../components/Signup';

function SignupPage() {
  return (
    <>
      <div className={styles.helmet}>
        <img
          src={Salesforcelogo}
          alt="SalesforceLogo"
          className={styles['helmet-img']}
        />
        <Typography>
          <span className={styles.span}>Salesforece Developers /</span>
          {' '}
          <span style={{ fontSize: '0.65rem' }}>Heroku</span>
        </Typography>
      </div>
      <div className={styles['header-main']}>
        <div className={styles['header-main-top']}>
          <img
            src={HerokuLogo}
            alt="HerokuLogo"
            className={styles['header-logo']}
          />
          <div className={styles['header-main-btn']}>
            <Typography
              style={{ color: 'white' }}
              className={styles.disappear}
            >
              Already have an account?
            </Typography>
            <Button
              style={{
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.2)',
                border: 'none',
                height: '2.4rem',
                width: '4.5rem',
                borderRadius: '4px',
                textAlign: 'center',
                ':hover': {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              }}
            >
              Log in
            </Button>
          </div>
        </div>
        <Typography
          style={{
            color: 'white',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            textShadow: '0 1px 0 rgba(0,0,0,0.25)',
            fontSize: '2rem',
          }}
        >
          Get started on Heroku today
        </Typography>
      </div>
      <div>
        <Signup />
      </div>
    </>
  );
}

export default SignupPage;
