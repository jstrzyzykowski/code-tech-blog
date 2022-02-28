import React from 'react';

import './loader.styles.scss';

export default function AdminLoader() {
  return (
    <div className="adminLoader">
      <div className="adminLoader__circle"/>
      <p className="adminLoader__text">Loading data</p>
    </div>
  );
}