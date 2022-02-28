import React from 'react';

import CommentListItem from '../comment-list-item/comment-list-item.component';
import SignedInComment from '../signed-in-comment/signed-in-comment.component';
import SignedOutComment from '../signed-out-comment/signed-out-comment.component';
import Pagination from "../pagination/pagination.component";

import {usePaginate} from "../../hooks/usePaginate/usePaginate.component";

import './comment-list.styles.scss';

export default function CommentList({ currentUser, comments }) {
  const [totalPageNumber, itemsToDisplay, handlePageChange] = usePaginate(comments, 5);
  const commentList = itemsToDisplay.map((item) => <CommentListItem key={item.id} {...item} />);

  return (
    <div className="commentList">
      <p className="commentList__commentsNumber">{comments.length} comments</p>
      {currentUser ? <SignedInComment /> : <SignedOutComment />}
      <div className="commentList__wrapper">
        {commentList}
      </div>
      {comments.length > 5 && <Pagination totalPageNumber={totalPageNumber} handlePageChange={handlePageChange}/>}
    </div>
  );
}
