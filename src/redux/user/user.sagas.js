import {takeLatest, put, all, call} from 'redux-saga/effects';

import {userTypes} from './user.types';
import {
  emailSignInSuccess,
  emailSignInFailure,
  checkUserSessionSuccess,
  checkUserSessionFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure, signUpSuccess,
} from './user.actions';
import {auth, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';

export function* signInWithEmail({payload: {email, password, additionalData = {}}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(checkUserSessionSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(checkUserSessionFailure(error));
  }
}

export function* onCheckUserSessionStart() {
  yield takeLatest(userTypes.CHECK_USER_SESSION_START, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

export function* signUp({payload: {email, username, password}}) {
  try {
    yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = {
      username,
      photoURL: "https://i.ibb.co/j59BN19/user-avatar-default.png",
      group: 1,
      hierarchy: 5
    }
    yield put(signUpSuccess(email, password, additionalData));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userTypes.SIGN_UP_SUCCESS, signInWithEmail)
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSessionStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}


