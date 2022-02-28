import React from 'react';
import { useHistory } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './article-list-item.styles.scss';

export default function ArticleListItem({ imageURL, publishedBy, title, uniqueName, publishedDate, comments }) {
  dayjs.extend(relativeTime);
  const dateFormatted = dayjs().to(dayjs(publishedDate));
  const history = useHistory();

  return (
    <div className="articleListItem" onClick={() => history.push(`/news/${uniqueName}`)}>
      <div className="articleListItem__body">
        <p className="articleListItem__body-title">{title}</p>
        <div className="articleListItem__body-desc">
          <div className="articleListItem__body-desc-item">
            <i className="fas fa-comment-alt"/>
            <p>{comments.length}</p>
          </div>
          <div className="articleListItem__body-desc-item">
            <i className="fas fa-user-alt"/>
            <p>{publishedBy}</p>
          </div>
          <div className="articleListItem__body-desc-item">
            <i className="far fa-calendar-alt"/>
            <p>{dateFormatted}</p>
          </div>
        </div>
      </div>
      <div className="articleListItem__imageContainer">
        <div className="articleListItem__imageContainer-filter"/>
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
}
