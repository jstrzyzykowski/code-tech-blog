import React from 'react';

import './comments-item.styles.scss';

export default function CommentsItem({index, id, publishedBy, publishedDate, text}) {
  const date = new Date(publishedDate).toLocaleString();

  return (
    <div className="commentsItem">
      <div className="commentsItem__header">
        <p className="commentsItem__header-index">{index}</p>
        <p className="commentsItem__header-id">{id}</p>
      </div>
      <div className="commentsItem__content">
        <div className="commentsItem__content-row">
          <p className="commentsItem__content-row-name">Published by:</p>
          <p className="commentsItem__content-row-value">{publishedBy}</p>
        </div>
        <div className="commentsItem__content-row">
          <p className="commentsItem__content-row-name">Published date:</p>
          <p className="commentsItem__content-row-value">{date}</p>
        </div>
        <div className="commentsItem__content-row">
          <p className="commentsItem__content-row-value">{text}</p>
        </div>
        <div className="commentsItem__content-actions">
          <button className="commentsItem__content-actions-button">
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  );
}