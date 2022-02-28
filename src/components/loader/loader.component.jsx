import React from 'react'

import './loader.styles.scss';

export default function Loader() {
  return (
    <div className='loader'>
      <div className="loader__circle"/>
      <p className="loader__text">Please wait</p>
    </div>
  );
}