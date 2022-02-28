import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import LoginModal from '../components/login-modal/login-modal.component';
import RegisterModal from "../components/register-modal/register-modal.component";
// import RemoveUserModal from "../pages/admin/admin-pages/users/modals/remove-user-modal/remove-user-modal.component";
import CreateArticleModal from "../pages/admin/admin-pages/articles/modals/create-article-modal/create-article-modal.component";
import RemoveResourceModal from "../pages/admin/admin-modals/remove-resource-modal/remove-resource-modal.component";

export default function ModalManager() {
  const modalLookup = {
    LoginModal,
    RegisterModal,
    RemoveResourceModal,
    CreateArticleModal,
    // Other modals here
  };
  const currentModal = useSelector((state) => state.modal);
  let renderedModal;

  if (currentModal.modalType) {
    const { modalType, modalPayload } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalPayload}/>;
  }

  return ReactDOM.createPortal(
    renderedModal,
    document.getElementById('modals')
  );
}
