import './style.css';
import React from 'react';
import bgImg from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
const Login = () => {
  return (
    <>
      <div className='login-page'>
        <div className='image-section'>
          <p>Design APIs fast,</p>
          <p>Manage content easily</p>
          <img src={bgImg} />
        </div>

        <div className='login-section'>
          <p>Login to your CMS+ account</p>
          <div className='login-form'>
            <p>Email</p>
            <input type='text' />

            <p>Password</p>
            <input type='password' />
            <br />
            <button>Login</button>
            <p id='forgot-pwd'>Forgot password?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;