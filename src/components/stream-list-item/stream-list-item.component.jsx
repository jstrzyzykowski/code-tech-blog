import React from 'react';

import StreamerAvatar from '../../assets/streamer-1.png';

import './stream-list-item.styles.scss';

export default function StreamListItem() {
  return (
    <a className="streamListItem" href="https://www.twitch.tv/zakerin0" rel="noopener noreferrer" target="_blank">
      <div className="streamListItem__imageWrapper live">
        <img src={StreamerAvatar} alt=""/>
      </div>
      <div className="streamListItem__body">
        <p className="streamListItem__body-name">Zakerin0</p>
        <p className="streamListItem__body-link">twitch.tv/zakerin0</p>
      </div>
      <div className="streamListItem__liveSignal live"/>
    </a>
  );
}