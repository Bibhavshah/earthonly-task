import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import SignupPage from './pages/SignupPage';
import SignUpSuccess from './pages/SignUpSuccess';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={<SignupPage />}
        />
        <Route
          path="/signupsuccess"
          element={<SignUpSuccess />}
        />
      </Routes>
    </div>
  );
}

export default App;
