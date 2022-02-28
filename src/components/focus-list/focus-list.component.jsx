import React from 'react';

import './focus-list.styles.scss';

//Strong
//Normal
//Weak

export default function FocusList() {
  return (
    <div className="focusList">
      <div className="focus">
        <div className="focus__header">
          <p className="focus__header-title">
            <i className="fas fa-skull"/>Pvp
          </p>
          <p className="focus__header-subtitle">Strong</p>
        </div>
        <div className="focus__bar">
          <div className="focus__bar-progress"/>
        </div>
      </div>
      <div className="focus">
        <div className="focus__header">
          <p className="focus__header-title">
            <i className="fas fa-pastafarianism"/>Pve
          </p>
          <p className="focus__header-subtitle">Strong</p>
        </div>
        <div className="focus__bar">
          <div className="focus__bar-progress"/>
        </div>
      </div>
      <div className="focus">
        <div className="focus__header">
          <p className="focus__header-title">
            <i className="fas fa-hammer"/>Craft
          </p>
          <p className="focus__header-subtitle">Strong</p>
        </div>
        <div className="focus__bar">
          <div className="focus__bar-progress"/>
        </div>
      </div>
      <div className="focus">
        <div className="focus__header">
          <p className="focus__header-title">
            <i className="fas fa-leaf"/>Gather
          </p>
          <p className="focus__header-subtitle">Strong</p>
        </div>
        <div className="focus__bar">
          <div className="focus__bar-progress"/>
        </div>
      </div>
    </div>
  );
}