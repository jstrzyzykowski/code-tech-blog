import { modalTypes } from './modal.types';

export function openModal(payload) {
  return {
    type: modalTypes.OPEN_MODAL,
    payload,
  }
}

export function closeModal() {
  return {
    type: modalTypes.CLOSE_MODAL,
  }
}