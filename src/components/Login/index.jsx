/* eslint-disable no-unused-vars */
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import { makeAuthRequest } from '../../utils/makeRequest';
import { LOGIN_URL } from '../../constants/apiEndPoints';
const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {

      const loginData = await makeAuthRequest(LOGIN_URL, {
        data: {
          username: user,
          password,
        },
      });
      localStorage.setItem('jwt_token', loginData.data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 4000);
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
          <p>Login to your CMS+ account</p>
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button type="submit"
              disabled={user === '' || password === ''}
              onClick={handleSubmit} data-testid='register-link'>Login</button>
            <p id='forgot-pwd'>Forgot password?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;