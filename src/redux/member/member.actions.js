import { memberTypes } from './member.types';

export const fetchMembersStart = () => {
  return {
    type: memberTypes.FETCH_MEMBERS_START,
  }
};
export const fetchMembersSuccess = (members) => {
  return {
    type: memberTypes.FETCH_MEMBERS_SUCCESS,
    payload: members,
  }
}
export const fetchMembersFailure = (error) => {
  return {
    type: memberTypes.FETCH_MEMBERS_FAILURE,
    payload: error,
  }
}