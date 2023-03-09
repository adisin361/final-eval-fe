import React from 'react';
import bgImg from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import './style.css';
import { useNavigate } from 'react-router-dom';
// import { makeAuthRequest } from '../../utils/makeRequest';
// import { REGISTER_URL } from '../../constants/apiEndpoints';
const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='login-page'>
        <div className='image-section'>
          <p>Design APIs fast,</p>
          <p>Manage content easily</p>
          <img src={bgImg} />
        </div>

        <div className='login-section'>
          <p>Register your CMS+ account now!</p>
          <div className='login-form'>
            <p>Email</p>
            <input type='text' />

            <p>Password</p>
            <input type='password' />
            <br />
            <button>Register</button>
            <p id='forgot-pwd' className='have-account' onClick={() => {
              navigate('/login');
            }}>Already have an account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;