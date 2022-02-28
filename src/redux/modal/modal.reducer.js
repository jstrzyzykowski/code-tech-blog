import { modalTypes } from './modal.types';

const initialState = {
  modalType: null,
  modalPayload: null,
};

export default function modalReducer(state = initialState, {type, payload}) {
  switch (type) {
    case modalTypes.OPEN_MODAL:
      const {modalType, modalPayload} = payload;
      return {
        ...state,
        modalType,
        modalPayload,
      }
    case modalTypes.CLOSE_MODAL:
      return {
        ...state,
        modalType: null,
        modalPayload: null,
      };
    default:
      return state;
  }
}