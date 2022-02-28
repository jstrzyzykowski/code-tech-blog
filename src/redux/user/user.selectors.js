import { createSelector } from 'reselect';
import { userGroups, userHierarchy } from './user.utils';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserHierarchyNumber = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.hierarchy
);

export const selectUserGroup = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    switch (currentUser.group) {
      case 1:
        return userGroups.GROUP_USER;
      case 2:
        return userGroups.GROUP_MODERATOR;
      case 3:
        return userGroups.GROUP_ADMIN;
      case 4:
        return userGroups.GROUP_ROOT;
      default:
        return userGroups.GROUP_USER;
    }
  }
);

export const selectUserHierarchyTitle = createSelector(
  [selectUserHierarchyNumber],
  (hierarchyNumber) => {
    switch (hierarchyNumber) {
      case 1:
        return userHierarchy.HIERARCHY_GOVERNOR;
      case 2:
        return userHierarchy.HIERARCHY_CONSUL;
      case 3:
        return userHierarchy.HIERARCHY_OFFICER;
      case 4:
        return userHierarchy.HIERARCHY_SETTLER;
      case 5:
        return userHierarchy.HIERARCHY_RECRUIT;
      default:
        return userHierarchy.HIERARCHY_RECRUIT;
    }
  }
);