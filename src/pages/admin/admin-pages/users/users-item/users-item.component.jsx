import React from 'react';
import {useDispatch} from "react-redux";

import {openModal} from '../../../../../redux/modal/modal.actions';

import './users-item.styles.scss';

export default function User({id, index, createdAt, email, hierarchy, username, group, removeUserAsync}) {
  const dispatch = useDispatch();

  return (
    <div className="user">
      <div className="user__header">
        <p className="user__header-index">{index}</p>
        <p className="user__header-id">{id}</p>
      </div>
      <div className="user__content">
        <div className="user__content-row">
          <p className="user__content-row-name">Username:</p>
          <p className="user__content-row-value">{username}</p>
        </div>
        <div className="user__content-row">
          <p className="user__content-row-name">Email:</p>
          <p className="user__content-row-value">{email}</p>
        </div>
        <div className="user__content-row">
          <p className="user__content-row-name">Group:</p>
          <p className="user__content-row-value">{group}</p>
        </div>
        <div className="user__content-row">
          <p className="user__content-row-name">Hierarchy</p>
          <p className="user__content-row-value">{hierarchy}</p>
        </div>
        <div className="user__content-row">
          <p className="user__content-row-name">Created date:</p>
          <p className="user__content-row-value">{createdAt}</p>
        </div>
        <div className="user__content-actions">
          <button className="user__content-actions-button"><i className="fas fa-pencil-alt"/></button>
          <button
            className="user__content-actions-button user__content-actions-button--remove"
            onClick={() => dispatch(openModal({
                modalType: "RemoveResourceModal",
                modalPayload: {
                  resourceType: "User",
                  resourceName: username,
                  removeAction: () => removeUserAsync(id)
                }
              }
            ))}
          >
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  );
}