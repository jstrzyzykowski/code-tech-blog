import React, {useEffect, lazy, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { createStructuredSelector } from "reselect";
import { selectIsArticlesLoaded } from "./redux/article/article.selectors";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectIsMembersLoaded } from "./redux/member/member.selectors";

import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesStart } from './redux/article/article.actions';
import { checkUserSessionStart } from './redux/user/user.actions';
import { fetchMembersStart } from "./redux/member/member.actions";

// import HomePage from './pages/home/home.component';
// import NewsDetailedPage from './pages/news-detailed/news-detailed.component';
// import AdminPage from "./pages/admin/admin.component";
// import AboutPage from './pages/about/about.component';
// import MembersPage from "./pages/members/members.component";

import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
import ModalManager from './modal/modal-manager.component';
import Loader from './components/loader/loader.component';
import Hero from "./components/hero/hero.component";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import './App.scss';

const HomePage = lazy(() => import('./pages/home/home.component'));
const NewsDetailedPage = lazy(() => import('./pages/news-detailed/news-detailed.component'));
const AdminPage = lazy(() => import('./pages/admin/admin.component'));
const AboutPage = lazy(() => import('./pages/about/about.component'));
const MembersPage = lazy(() => import('./pages/members/members.component'));

function App() {
  const dispatch = useDispatch();
  const { currentUser, isArticlesLoaded, isMembersLoaded } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    isArticlesLoaded: selectIsArticlesLoaded,
    isMembersLoaded: selectIsMembersLoaded,
  }));

  useEffect(() => {
    dispatch(checkUserSessionStart());
    dispatch(fetchArticlesStart());
    dispatch(fetchMembersStart());
  }, [dispatch])

  if(!isArticlesLoaded || !isMembersLoaded) return <Loader/>
  return (
    <>
      <ModalManager/>
      <div className="app">
        <Navigation/>
        <div className="main">
          <Hero/>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Loader/>}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/news/:newsUniqueName" component={NewsDetailedPage}/>
                <Route path="/admin" render={() => (currentUser && (currentUser.group >= 3)) ? <AdminPage/> : <Redirect to="/"/>}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/members" component={MembersPage}/>
                <Route render={() => <Redirect to="/"/>}/>
              </Suspense>
            </ErrorBoundary>
          </Switch>
          <div className="main__downImage"/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
