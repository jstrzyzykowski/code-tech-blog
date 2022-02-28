import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import cuid from 'cuid';

import {addCommentToArticleStart} from '../../redux/article/article.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormTextarea from '../form-textarea/form-textarea.component';

import './signed-in-comment.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectParticularArticle} from "../../redux/article/article.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

export default function SignedInComment() {
  const [userComment, setUserComment] = useState('');
  const { newsUniqueName } = useParams();
  const {currentUser, article} = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    article: selectParticularArticle(newsUniqueName),
  }));
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setUserComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const comment = {
      articleId: article.id,
      id: cuid(),
      text: userComment,
      publishedBy: currentUser.username,
      publishedByAvatarURL: currentUser.photoURL,
      publishedDate: new Date().toJSON(),
    };

    dispatch(addCommentToArticleStart(comment));
    setUserComment('');
  };

  return (
    <form className="newsDetailed__comments-add" onSubmit={handleSubmit}>
      <FormTextarea
        name="userComment"
        value={userComment}
        handleChange={handleChange}
        required
        placeholder="Write something inetersting."
      />
      <CustomButton type="submit">Comment</CustomButton>
    </form>
  );
}
