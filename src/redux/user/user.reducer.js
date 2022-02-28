import { userTypes } from './user.types';

const initialState = {
  currentUser: null,
  error: null,
}

export default function userReducer(state = initialState, {type, payload}) {
  switch (type) {
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
    case userTypes.CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      }
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case userTypes.EMAIL_SIGN_IN_FAILURE:
    case userTypes.CHECK_USER_SESSION_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
    case userTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: payload,
      }
    default:
      return state;
  }
}