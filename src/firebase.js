import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCUZuc5X8f8jsmRjFyevDFb_aDX4ci7sSg',
  authDomain: 'heroku-mock-app.firebaseapp.com',
  projectId: 'heroku-mock-app',
  storageBucket: 'heroku-mock-app.appspot.com',
  messagingSenderId: '675756311069',
  appId: '1:675756311069:web:bb1e7a7a10a347a33d7cf4',
  measurementId: 'G-YK7QW5ERM4'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
