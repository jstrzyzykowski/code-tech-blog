import React from 'react';
import { useDispatch } from 'react-redux';

import {closeModal, openModal} from '../../redux/modal/modal.actions';

import ModalWrapper from '../../modal/modal-wrapper.component';
import LoginForm from '../login-form/login-form.component';

import './login-modal.styles.scss';

export default function LoginModal() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closeModal());
    dispatch(openModal({modalType: "RegisterModal"}));
  }

  return (
    <ModalWrapper header="Account Login">
      <LoginForm />
      <div className="loginModal__newAccount">
        <p className="loginModal__newAccount-text">Do not have an account?</p>
        <button
          className="loginModal__newAccount-button"
          onClick={handleClick}
        >
          Register Now
        </button>
      </div>
    </ModalWrapper>
  );
}
