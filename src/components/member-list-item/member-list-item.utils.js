import { userHierarchy } from '../../redux/user/user.utils';

export function getHierarchyTitle(hierarchyNumber) {
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