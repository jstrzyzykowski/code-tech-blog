import React from 'react';
import {useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import CommentList from '../../components/comment-list/comment-list.component';

import './news-detailed.styles.scss';
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import {selectArticles, selectIsArticlesLoaded} from "../../redux/article/article.selectors";
import CommentListContainer from "../../components/comment-list/comment-list.container";


export default function NewsDetailedPage({match}) {
  dayjs.extend(relativeTime);
  const {newsUniqueName} = match.params;
  const {articles} = useSelector(createStructuredSelector({
    isLoaded: selectIsArticlesLoaded,
    articles: selectArticles,
  }))
  const currentArticle = articles.find((article) => article.uniqueName === newsUniqueName);

  const {imageURL, publishedBy, publishedDate, comments, title, text} = currentArticle;
  const dateFormatted = dayjs().to(dayjs(publishedDate))

  return (
    <>
      {/*<div className="newsDetailed__hero"/>*/}
      <div className="newsDetailed">
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="Cover">
          <div className="newsDetailed__imageWrapper">
            <img src={imageURL} alt=""/>
          </div>
        </SectionWrapper>
        <SectionWrapper sectionIcon="fas fa-comments" sectionTitle="Comments">
          {/*<CommentList comments={comments}/>*/}
          <CommentListContainer comments={comments}/>
        </SectionWrapper>
        <SectionWrapper sectionIcon="fas fa-info" sectionTitle="Description">
          <div className="newsDetailed__newsInfo">
            <p className="newsDetailed__header-desc">Published by <span>{publishedBy}</span> {dateFormatted}</p>
            <div className="newsDetailed__header-stats">
              <div className="newsDetailed__header-stat">
                <i className="fas fa-comment-alt"/>
                <p>{comments.length}</p>
              </div>
              <div className="newsDetailed__header-stat">
                <i className="far fa-eye"/>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="newsDetailed__newsText">
            <p className="newsDetailed__newsText-title">{title}</p>
            <p className="newsDetailed__newsText-description">{text}</p>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
