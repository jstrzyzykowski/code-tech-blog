import { menuTypes } from './menu.types';

export function toggleMobileMenu() {
  return {
    type: menuTypes.TOGGLE_MOBILE_MENU,
  }
}

export function toggleUserMenu() {
  return {
    type: menuTypes.TOGGLE_USER_MENU,
  }
}

export function hideMobileMenu() {
  return {
    type: menuTypes.HIDE_MOBILE_MENU,
  }
}

export function hideUserMenu() {
  return {
    type: menuTypes.HIDE_USER_MENU,
  }
}

export function hideAllMenus() {
  return {
    type: menuTypes.HIDE_ALL_MENUS,
  }
}