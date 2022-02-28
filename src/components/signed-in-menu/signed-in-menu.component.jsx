import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { hideMobileMenu, hideUserMenu, toggleUserMenu } from '../../redux/menu/menu.actions';
import { signOutStart } from '../../redux/user/user.actions';

import './signed-in-menu.styles.scss';
import SignedInMenuItem from '../signed-in-menu-item/signed-in-menu-item.component';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser, selectUserHierarchyTitle} from "../../redux/user/user.selectors";

export default function SignedInMenu() {
  const { currentUser, hierarchyTitle } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    hierarchyTitle: selectUserHierarchyTitle
  }));
  const {userMenu, mobileMenu} = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(hideUserMenu());
    dispatch(signOutStart());
  }

  const handleClick = () => {
    if(mobileMenu) dispatch(hideMobileMenu());
    dispatch(toggleUserMenu());
  }

  return (
    <div className="navigation__user">
      <div className={`navigation__user-menu ${userMenu ? 'active' : ''}`}>
        <ul className="navigation__user-menu-list">
          {currentUser.group >= 3 && (
            <SignedInMenuItem
              pathURL="/admin"
              iconClass="fas fa-tools"
              title="Admin Panel"
              description="Configure app content"
              handleClick={() => dispatch(hideUserMenu())}
            />
          )}
          <SignedInMenuItem
            button
            iconClass="fas fa-door-open" 
            title="Logout" 
            description="View the app as guest" 
            handleClick={handleLogout}
          />
        </ul>
      </div>
      <div className={`navigation__user-box ${userMenu ? 'active' : ''}`} onClick={handleClick}>
        <div className="navigation__user-box-avatar">
          <img src={currentUser.photoURL} alt="User avatar" />
        </div>
        <div className="navigation__user-box-userInfo">
          <p className="navigation__user-box-userInfo-name">{currentUser.username}</p>
          <p className={`navigation__user-box-userInfo-hierarchy ${hierarchyTitle}`}>{hierarchyTitle}</p>
        </div>
        <i className="fas fa-chevron-down"/>
      </div>
    </div>
  );
}
