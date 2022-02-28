import React from 'react';
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import CommentList from "./comment-list.component";

export default function CommentListContainer(props) {
  const {currentUser} = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }));

  return <CommentList currentUser={currentUser} {...props}/>
}