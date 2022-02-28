import React from 'react';

import './hierarchy-list.styles.scss';

export default function HierarchyList() {
  return (
    <div className="hierarchyList">
      <div className="hierarchyList__hierarchy governor">
        <p className="hierarchyList__hierarchy-number">1</p>
        <p className="hierarchyList__hierarchy-name">Governor</p>
      </div>
      <div className="hierarchyList__hierarchy consul">
        <p className="hierarchyList__hierarchy-number">2</p>
        <p className="hierarchyList__hierarchy-name">Consul</p>
      </div>
      <div className="hierarchyList__hierarchy officer">
        <p className="hierarchyList__hierarchy-number">3</p>
        <p className="hierarchyList__hierarchy-name">Officer</p>
      </div>
      <div className="hierarchyList__hierarchy settler">
        <p className="hierarchyList__hierarchy-number">4</p>
        <p className="hierarchyList__hierarchy-name">Settler</p>
      </div>
      <div className="hierarchyList__hierarchy">
        <p className="hierarchyList__hierarchy-number">5</p>
        <p className="hierarchyList__hierarchy-name">Recruit</p>
      </div>
    </div>
  );
}