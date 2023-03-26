import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../context';
import images from '../../../images';
import './AuthLogin.scss';

const AuthLogin = () => {
  const { setAuthUser } = useGlobalContext();
  const [auth, setAuth] = useState('');

  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [ssd, setSsd] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log({
      role,
      email,
      ssd,
      password,
    });
    e.preventDefault();
    fetch('http://localhost:80/roshetta/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role,
        email,
        ssd,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // setRole('');
    // setEmail('');
    // setPassword('');
    // setSsd('');

    // navigate('/');
  };
  return (
    <>
      <div className="auth-login">
        <div className="auth-login__img">
          <img src={images.logo1} alt="logo" />
        </div>
        <h2 className="auth-login__title">انشاء حساب جديد</h2>
        <p className="auth-login__text">يرجي مليء البيانات لانشاء حساب جديد</p>
        <form className="auth-login__form" onSubmit={handleSubmit}>
          
        </form>
      </div>
    </>
  );
};

export default AuthLogin;
