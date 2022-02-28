import { memberTypes } from './member.types';

const INITIAL_STATE = {
  members: null,
  isFetching: false,
  error: null,
};

export default function memberReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case memberTypes.FETCH_MEMBERS_START:
      return {
        ...state,
        isFetching: true,
      }
    case memberTypes.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        members: payload,
        error: null,
      }
    case memberTypes.FETCH_MEMBERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
    default:
      return state;
  }
}