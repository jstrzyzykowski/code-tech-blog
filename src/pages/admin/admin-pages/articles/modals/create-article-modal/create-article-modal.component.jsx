import React from 'react';

import './create-article-modal.styles.scss';
import ModalWrapper from "../../../../../../modal/modal-wrapper.component";
import CreateArticleForm from "../../../../../../components/create-article-form/create-article-form.component";

export default function CreateArticleModal() {
  return (
    <ModalWrapper header="New Article">
      <CreateArticleForm/>
    </ModalWrapper>
  );
}