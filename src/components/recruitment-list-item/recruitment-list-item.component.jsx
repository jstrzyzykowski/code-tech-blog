import React from 'react'

import './recruitment-list-item.styles.scss';

export default function RecruitmentListItem() {
  return(
    <div className="lookingForItem">
      <div className="lookingForItem__wrapper">
        <i className="fas fa-gavel"/>
        <p className="description">Double Hammer</p>
      </div>
      <div className="destination">
        <p className="role">PvP</p>
        <p className="role active">PvE</p>
        <p className="role">Craft</p>
        <p className="role">Gather</p>
      </div>
    </div>
  );
}