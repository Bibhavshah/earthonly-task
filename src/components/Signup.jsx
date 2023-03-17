import { Typography } from 'antd';
import React from 'react';
import styles from '../App.module.css';
import Signupform from './Signupform';
import userIcon from '../assets/person-circle.svg';
import platform from '../assets/nut.svg';
import deployicon from '../assets/cloud-upload.svg';

function Signup() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.benefits}>
        <div className={styles['benefits-item']}>
          <div className={styles['benefits-item-title']}>
            <img
              src={userIcon}
              alt="User Icon"
            />
            <Typography style={{ color: '#79589F', fontSize: '24px' }}>
              Heroku account
            </Typography>
          </div>
          <Typography>
            Create apps, connect databases and add-on services, and collaborate
            on your apps.
          </Typography>
        </div>
        <hr className={styles.line} />
        <div className={styles['benefits-item']}>
          <div className={styles['benefits-item-title']}>
            <img
              src={platform}
              alt="Platform Icon"
            />
            <Typography style={{ color: '#79589F', fontSize: '24px' }}>
              Your Platform
            </Typography>
          </div>
          <Typography>
            A platform for apps, with app management & instant scaling, for
            development and production.
          </Typography>
        </div>
        <hr className={styles.line} />
        <div className={styles['benefits-item']}>
          <div className={styles['benefits-item-title']}>
            <img
              src={deployicon}
              alt="Deploy Icon"
            />
            <Typography style={{ color: '#79589F', fontSize: '24px' }}>
              Deploy Now
            </Typography>
          </div>
          <Typography>
            Go from code to running app in minutes. Deploy, scale, and deliver
            your app to the world.
          </Typography>
        </div>
      </div>
      <Signupform />
    </div>
  );
}

export default Signup;
