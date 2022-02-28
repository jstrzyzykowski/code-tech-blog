import React from 'react';

import './rule-list.styles.scss';

export default function RuleList() {
  return (
    <div className="ruleList">
      <div className="rule">
        <i className="fas fa-gavel"/>
        <p className="rule__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fuga hic,
          itaque laboriosam maiores odio quibusdam! Corporis dolor, nobis.</p>
      </div>
      <div className="rule">
        <i className="fas fa-gavel"/>
        <p className="rule__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fuga hic,
          itaque laboriosam maiores odio quibusdam! Corporis dolor, nobis.</p>
      </div>
      <div className="rule">
        <i className="fas fa-gavel"/>
        <p className="rule__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fuga hic,
          itaque laboriosam maiores odio quibusdam! Corporis dolor, nobis.</p>
      </div>
    </div>
  );
}