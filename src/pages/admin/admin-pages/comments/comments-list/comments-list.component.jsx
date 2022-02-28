import React from 'react';

import './comments-list.styles.scss';
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCommentsOfParticularArticle} from "../../../../../redux/article/article.selectors";
import CommentsItem from "../comments-item/comments-item.component";

export default function CommentsList({match}) {
  const {articleId} = match.params;
  const { comments } = useSelector(createStructuredSelector({
    comments: selectCommentsOfParticularArticle(articleId),
  }));


  return (
    <div className="commentsList">
      {comments.map((comment, index) => <CommentsItem key={comment.id} index={index + 1} {...comment}/>)}
    </div>
  );
}