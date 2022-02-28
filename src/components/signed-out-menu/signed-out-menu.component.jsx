import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '../../redux/modal/modal.actions';

import './signed-out-menu.styles.scss';

export default function SignedOutMenu() {
  const dispatch = useDispatch();

  return (
    <div className="signedOutMenu" onClick={() => dispatch(openModal({ modalType: 'LoginModal' }))}>
      <p className="signedOutMenu__text">
        Login
      </p>
      {/*<i className="fas fa-sign-in-alt"></i>*/}
    </div>
  );
}
