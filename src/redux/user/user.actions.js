import { userTypes } from './user.types';

export function emailSignInStart(emailAndPassword) {
  return {
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  }
}
export function emailSignInSuccess(user) {
  return {
    type: userTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  }
}
export function emailSignInFailure(error) {
  return {
    type: userTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
  }
}

export function checkUserSessionStart() {
  return {
    type: userTypes.CHECK_USER_SESSION_START,
  }
}
export function checkUserSessionSuccess(user) {
  return {
    type: userTypes.CHECK_USER_SESSION_SUCCESS,
    payload: user,
  }
}
export function checkUserSessionFailure(error) {
  return {
    type: userTypes.CHECK_USER_SESSION_FAILURE,
    payload: error,
  }
}

export function signOutStart() {
  return {
    type: userTypes.SIGN_OUT_START,
  }
}
export function signOutSuccess() {
  return {
    type: userTypes.SIGN_OUT_SUCCESS,
  }
}
export function signOutFailure(error) {
  return {
    type: userTypes.SIGN_OUT_FAILURE,
    payload: error,
  }
}

export function signUpStart(registerData) {
  return {
    type: userTypes.SIGN_UP_START,
    payload: registerData,
  }
}
export function signUpSuccess(email, password, additionalData) {
  return {
    type: userTypes.SIGN_UP_SUCCESS,
    payload: {
      email,
      password,
      additionalData,
    }
  }
}
export function signUpFailure(error) {
  return {
    type: userTypes.SIGN_UP_FAILURE,
    payload: error,
  }
}