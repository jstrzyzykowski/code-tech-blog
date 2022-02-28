import React from 'react';

import dayjs from 'dayjs';

import './comment-list-item.styles.scss';

export default function CommentListItem({ publishedBy, publishedByAvatarURL, text, publishedDate }) {
  const dateFormated = dayjs(publishedDate).format('MMMM DD, YYYY');

  return (
    <div className="commentListItem">
      <div className="commentListItem__header">
        <div className="commentListItem__header-avatar">
          <img src={publishedByAvatarURL} alt="Comment author avatar" />
        </div>
        <div className="commentListItem__header-info">
          <p className="commentListItem__header-author">{publishedBy}</p>
          <p className="commentListItem__header-published">{dateFormated}</p>
        </div>
      </div>
      <div className="commentListItem__body">
        <p className="commentListItem__body-text">{text}</p>
      </div>
    </div>
  );
}
