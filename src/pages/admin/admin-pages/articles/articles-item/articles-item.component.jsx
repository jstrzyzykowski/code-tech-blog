import React from 'react';
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { openModal } from "../../../../../redux/modal/modal.actions";
import { removeArticleStart } from '../../../../../redux/article/article.actions';

import './articles-item.styles.scss';

export default function ArticlesItem({index, id, publishedBy, publishedDate, title, imageURL, comments, text}) {
  const date = new Date(publishedDate).toLocaleString();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="article">
      <div className="article__header">
        <p className="article__header-index">{index}</p>
        <p className="article__header-id">{id}</p>
      </div>
      <div className="article__content">
        <div className="article__content-wrapper">
          <div className="article__content-wrapper-imageWrapper">
            <img src={imageURL} alt=""/>
          </div>
          <div className="article__content-wrapper-rows">
            <div className="article__content-wrapper-rows-row">
              <p className="article__content-wrapper-rows-row-name">Title:</p>
              <p className="article__content-wrapper-rows-row-value">{title}</p>
            </div>
            <div className="article__content-wrapper-rows-row">
              <p className="article__content-wrapper-rows-row-name">Published by:</p>
              <p className="article__content-wrapper-rows-row-value">{publishedBy}</p>
            </div>
            <div className="article__content-wrapper-rows-row">
              <p className="article__content-wrapper-rows-row-name">Published date:</p>
              <p className="article__content-wrapper-rows-row-value">{date}</p>
            </div>
            <div className="article__content-wrapper-rows-row">
              <p className="article__content-wrapper-rows-row-name">Comments:</p>
              <p className="article__content-wrapper-rows-row-value">{comments.length}</p>
            </div>
            <div className="article__content-wrapper-rows-row">
              <p className="article__content-wrapper-rows-row-value">{text}</p>
            </div>
          </div>
        </div>
        <div className="article__content-actions">
          <button
            className="article__content-actions-button"
            onClick={() => history.push(`/admin/comments/${id}`)}
          >
            <i className="fas fa-comments"/>
          </button>
          <button className="article__content-actions-button">
            <i className="fas fa-pencil-alt"/>
          </button>
          <button
            className="article__content-actions-button article__content-actions-button--remove"
            onClick={() => dispatch(openModal({
              modalType: "RemoveResourceModal",
              modalPayload: {
                resourceType: "Article",
                resourceName: title,
                removeAction: () => dispatch(removeArticleStart(id)),
              }
            }
            ))}
          >
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  );
}