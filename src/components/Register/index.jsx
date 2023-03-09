/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import bgImg from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { makeAuthRequest } from '../../utils/makeRequest';
import { REGISTER_URL } from '../../constants/apiEndPoints';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    console.log(user);
    console.log(password);
    try {
      await makeAuthRequest(REGISTER_URL, {
        data: {
          username: user,
          password: password,
        },
      });
      navigate('/login');
    } catch (error) {
      setError(error);
    }
  };

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
            <input type="email"
              name="username"
              value={user}
              onChange={(event) => setUser(event.target.value)} />

            <p>Password</p>
            <input type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
            <br />
            <button type="submit"
              disabled={user === '' || password === ''}
              onClick={handleSubmit}>Register</button>
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