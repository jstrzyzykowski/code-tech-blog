import { createSelector } from 'reselect';

const selectMember = (state) => state.member;

export const selectMembers = createSelector(
  [selectMember],
  (member) => member.members
);

export const selectMembersLength = createSelector(
  [selectMembers],
  (members) => members.length
);

export const selectIsMembersLoaded = createSelector(
  [selectMember],
  (member) => !!member.members
);

export const selectIsMembersFetching = createSelector(
  [selectMember],
  (member) => member.isFetching
);