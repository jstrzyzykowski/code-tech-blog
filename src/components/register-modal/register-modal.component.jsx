import React from 'react';
import {useDispatch} from "react-redux";

import './register-modal.styles.scss';
import ModalWrapper from "../../modal/modal-wrapper.component";
import RegisterForm from "../register-form/register-form.component";
import {closeModal, openModal} from "../../redux/modal/modal.actions";

export default function RegisterModal() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closeModal());
    dispatch(openModal({modalType: "LoginModal"}));
  }

  return (
    <ModalWrapper header="New Account">
      <RegisterForm/>
      <div className="registerModal__footer">
        <p className="registerModal__footer-text">Already have an account?</p>
        <button className="registerModal__footer-button" onClick={handleClick}>
          Login here!
        </button>
      </div>
    </ModalWrapper>
  );
}