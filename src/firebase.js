import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'my-new-app-f5454.firebaseapp.com',
  projectId: 'my-new-app-f5454',
  storageBucket: 'my-new-app-f5454.appspot.com',
  messagingSenderId: '8620507420',
  appId: '1:8620507420:web:27800a7a907f0ac8a03ad9',
  measurementId: 'G-S8FZSEW8J2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
