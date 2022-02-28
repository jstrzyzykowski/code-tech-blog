import React from 'react';

import './fog.styles.scss';

export default function Fog() {
  return (
    <div className="fogContainer">
      <div id="foglayer_01" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
    </div>
  );
}