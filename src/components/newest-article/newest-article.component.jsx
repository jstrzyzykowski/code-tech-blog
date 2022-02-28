import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import dayjs from 'dayjs';

import './newest-article.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectArticles} from "../../redux/article/article.selectors";

export default function NewestArticle() {
  //TODO: Select the newest article not while article list
  const { articles } = useSelector(createStructuredSelector({
    articles: selectArticles,
  }));
  const history = useHistory();
  
  const {imageURL, publishedBy, title, uniqueName, publishedDate, comments} = articles[0];
  const dateFormated = dayjs(publishedDate).format('MMMM DD, YYYY');

  return(
    <div className="newestArticle" onClick={() => history.push(`/news/${uniqueName}`)}>

      {/*<div className="newestArticle__header">*/}
      {/*  <p className="newestArticle__header-label">New</p>*/}
      {/*  <p className="newestArticle__header-title">Newest Article</p>*/}
      {/*</div>*/}

      <div className="newestArticle__imageWrapper">
        <div className="newestArticle__imageWrapper-filter"/>
        <img className="newestArticle__image" src={imageURL} alt="" />
      </div>

      <div className="newestArticle__footer">
        <p className="newestArticle__footer-title">{title}</p>
        <div className="newestArticle__footer-articleStats">
          <div className="newestArticle__footer-articleStats-stat">
            <i className="fas fa-comment-alt"/>
            <p>{comments.length}</p>
          </div>
          <div className="newestArticle__footer-articleStats-stat">
            <i className="fas fa-user-alt"/>
            <p>{publishedBy}</p>
          </div>
          <div className="newestArticle__footer-articleStats-stat">
            <i className="far fa-calendar-alt"/>
            <p>{dateFormated}</p>
          </div>
        </div>
      </div>
    </div>
  );
}