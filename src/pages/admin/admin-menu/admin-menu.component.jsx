import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";

import './admin-menu.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../../redux/user/user.selectors";

export default function AdminMenu() {
  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }));

  return (
    <ul className="adminMenu">
      <li className="adminMenu__item">
        <NavLink exact to="/admin" className="adminMenu__item-link">
          Overview
        </NavLink>
      </li>
      {currentUser.group === 4 && (
        <li className="adminMenu__item">
          <NavLink exact to="/admin/users" className="adminMenu__item-link">
            Users
          </NavLink>
        </li>
      )}
      <li className="adminMenu__item">
        <NavLink exact to="/admin/articles" className="adminMenu__item-link">
          Articles
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink to="/admin/comments" className="adminMenu__item-link">
          Comments
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/territories" className="adminMenu__item-link">
          Territories
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/members" className="adminMenu__item-link">
          Members
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/alliances" className="adminMenu__item-link">
          Alliances
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/jobs" className="adminMenu__item-link">
          Jobs
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/streamers" className="adminMenu__item-link">
          Streamers
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/rules" className="adminMenu__item-link">
          Rules
        </NavLink>
      </li>
      <li className="adminMenu__item">
        <NavLink exact to="/admin/focus" className="adminMenu__item-link">
          Focus
        </NavLink>
      </li>
    </ul>
  );
}