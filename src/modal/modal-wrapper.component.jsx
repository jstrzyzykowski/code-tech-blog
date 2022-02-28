import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../redux/modal/modal.actions';

import './modal-wrapper.styles.scss';

export default function ModalWrapper({ children, header }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modalWrapper__overlay" onClick={() => dispatch(closeModal())}/>
      <div className="modalWrapper__modal">
        {header && <div className="modalWrapper__modal-header">{header}</div>}
        <div className="modalWrapper__modal-content">{children}</div>
      </div>
    </>
  );
}
