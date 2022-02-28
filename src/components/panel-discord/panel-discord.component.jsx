import React from 'react';

import DiscordHeaderIcon from '../../assets/discord-header-icon.png';

import './panel-discord.styles.scss';

export default function PanelDiscord() {
  return (
    <a className="panelDiscord" href="https://discord.com/" rel="noopener noreferrer" target="_blank">
      <div className="panelDiscord__imageWrapper">
        <img src={DiscordHeaderIcon} alt=""/>
      </div>
    </a>
  );
}