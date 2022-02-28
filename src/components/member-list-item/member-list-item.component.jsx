import React, {useMemo} from 'react';

import './member-list-item.styles.scss';
import {getHierarchyTitle} from "./member-list-item.utils";

export default function MemberListItem({index, hierarchy, nickname, media}) {
  const hierarchyTitle = useMemo(() => getHierarchyTitle(hierarchy), [hierarchy]);

  return (
    <div className={`member ${hierarchyTitle}`}>
      <p className="member__rowNumber">{index}</p>
      <div className="member__wrapper">
        <p className="member__wrapper-nickname">{nickname}</p>
        <p className="member__wrapper-hierarchy">{hierarchyTitle}</p>
      </div>
      <div className="member__media">

        {/*TODO: Create MemberMediaItem witch tooltip feature*/}
        {media.filter((mediaItem) => mediaItem.isPublic).map((mediaItem) => (
          <div className="member__media-item">
            {mediaItem.type === 'discord' && <i className="fab fa-discord"/>}
            {mediaItem.type === 'twitch' && <i className="fab fa-twitch"/>}
          </div>
        ))}
      </div>
    </div>
  );
}