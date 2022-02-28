import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './login-form.styles.scss';

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {email, password} = loginData;
    dispatch(emailSignInStart({email, password}));
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormInput
        name="email"
        value={loginData.email}
        handleChange={handleChange}
        type="email"
        required
        label="Email"
      />
      <FormInput
        name="password"
        value={loginData.password}
        handleChange={handleChange}
        type="password"
        required
        label="Password"
      />
      <CustomButton type="submit" fluid>
        Login
      </CustomButton>
    </form>
  );
}
