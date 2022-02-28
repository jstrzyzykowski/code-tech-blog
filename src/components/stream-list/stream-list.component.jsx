import React from 'react';

import StreamListItem from "../stream-list-item/stream-list-item.component";

import './stream-list.styles.scss';

export default function StreamList() {
  return (
    <div className="streamList">
      <StreamListItem/>
      <StreamListItem/>
    </div>
  );
}
