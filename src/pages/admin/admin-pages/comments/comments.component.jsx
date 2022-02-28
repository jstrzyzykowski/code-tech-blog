import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";

// import CommentsList from "./comments-list/comments-list.component";
// import CommentsOverview from "./comments-overview/comments-overview.component";

import './comments.styles.scss';
import AdminLoader from "../../admin-loader/loader.component";

const CommentsList = lazy(() => import('./comments-list/comments-list.component'));
const CommentsOverview = lazy(() => import('./comments-overview/comments-overview.component'));

export default function CommentsPage({match}) {
  return (
    <>
      <div className="commentsPage__info"/>
      <Switch>
        <Suspense fallback={<AdminLoader/>}>
          <Route exact path={`${match.path}`} component={CommentsOverview}/>
          <Route exact path={`${match.path}/:articleId`} component={CommentsList}/>
        </Suspense>
      </Switch>
    </>
  );
}