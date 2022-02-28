import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './register-form.styles.scss';

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: '',
    passwordRepeat: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, username, password, passwordRepeat} = registerData;
    if(password !== passwordRepeat) {
      alert("Passwords don't match")
      return;
    }
    dispatch(signUpStart({email, username, password}));
  }

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <FormInput
        name="email"
        value={registerData.email}
        handleChange={handleChange}
        type="email"
        required
        label="Email"
      />
      <FormInput
        name="username"
        value={registerData.username}
        handleChange={handleChange}
        type="text"
        required
        label="Username"
      />
      <FormInput
        name="password"
        value={registerData.password}
        handleChange={handleChange}
        type="password"
        required
        label="Password"
      />
      <FormInput
        name="passwordRepeat"
        value={registerData.passwordRepeat}
        handleChange={handleChange}
        type="password"
        required
        label="Password Repeat"
      />
      <CustomButton type="submit" fluid>Register</CustomButton>
    </form>
  );
}
