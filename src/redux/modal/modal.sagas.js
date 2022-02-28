import { takeLatest, all, call, put } from 'redux-saga/effects';

import { userTypes } from '../user/user.types';
import { articleTypes } from '../article/article.types';
import { closeModal } from './modal.actions';

export function* closeModalWindow() {
  yield put(closeModal());
}

export function* onEmailSignInSuccess() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_SUCCESS, closeModalWindow);
}

export function* onAddArticleSuccess() {
  yield takeLatest(articleTypes.ADD_ARTICLE_SUCCESS, closeModalWindow);
}

export function* onRemoveArticleSuccess() {
  yield takeLatest(articleTypes.REMOVE_ARTICLE_SUCCESS, closeModalWindow);
}

export function* modalSagas() {
  yield all([
    call(onEmailSignInSuccess),
    call(onAddArticleSuccess),
    call(onRemoveArticleSuccess),
  ]);
}

