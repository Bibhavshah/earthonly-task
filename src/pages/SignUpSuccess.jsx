import React from 'react';

function SignUpSucess() {
  return (
    <div
      style={{
        backgroundColor: '#F9F9Fb',
        width: '50%',
        height: '50%',
        margin: '150px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
      }}
    >
      <h1
        style={{
          color: '#94AF9F',
          margin: '3rem',
          fontSize: '3rem',
          fontWeight: 'bold',
          lineHeight: '1.5rem',
        }}
      >
        Congratulations!🎉
      </h1>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#37306B' }}>
        Your email has been successfully authenticated with our App.
      </p>
    </div>
  );
}

export default SignUpSucess;
