import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import AdminMenu from "./admin-menu/admin-menu.component";
// import OverviewPage from "./admin-pages/overview/overview.component";
// import UsersPage from "./admin-pages/users/users.component";
// import ArticlesPage from "./admin-pages/articles/articles.component";
// import CommentsPage from "./admin-pages/comments/comments.component";

import './admin.styles.scss';
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import AdminLoader from "./admin-loader/loader.component";

const OverviewPage = lazy(() => import('./admin-pages/overview/overview.component'));
const UsersPage = lazy(() => import('./admin-pages/users/users.component'));
const ArticlesPage = lazy(() => import('./admin-pages/articles/articles.component'));
const CommentsPage = lazy(() => import('./admin-pages/comments/comments.component'));

export default function AdminPage() {
  const match = useRouteMatch();
  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }));

  return (
    <>
      {/*<div className="adminPage__hero"/>*/}
      <div className="adminPage__content">
        <SectionWrapper sectionIcon="fas fa-cogs" sectionTitle="Settings">
          <div className="adminPage__contentWrapper">
            <AdminMenu/>
            <div className="adminPage__contentWrapper-page">
              <Switch>
                <Suspense fallback={<AdminLoader/>}>
                  <Route exact path={`${match.path}`} component={OverviewPage}/>
                  <Route exact path={`${match.path}/users`} render={() => currentUser.group === 4 ? <UsersPage/> : <Redirect to={match.path}/>}/>
                  <Route exact path={`${match.path}/articles`} component={ArticlesPage}/>
                  <Route path={`${match.path}/comments`} component={CommentsPage}/>
                  {/*<Route render={() => <Redirect to="/admin"/>}/>*/}
                </Suspense>
              </Switch>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
