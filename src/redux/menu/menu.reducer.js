import { menuTypes } from './menu.types';

const initialState = {
  mobileMenu: false,
  userMenu: false,
}

export default function menuReducer(state = initialState, {type, payload}) {
  switch (type) {
    case menuTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenu: !state.mobileMenu,
      }
    case menuTypes.TOGGLE_USER_MENU:
      return {
        ...state,
        userMenu: !state.userMenu,
      }
    case menuTypes.HIDE_MOBILE_MENU:
      return {
        ...state,
        mobileMenu: false,
      }
    case menuTypes.HIDE_USER_MENU:
      return {
        ...state,
        userMenu: false,
      }
    case menuTypes.HIDE_ALL_MENUS:
      return {
        ...state,
        mobileMenu: false,
        userMenu: false,
      }
    default:
      return state;
  }
}