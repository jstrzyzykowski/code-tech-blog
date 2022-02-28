import {takeLatest, put, all, call} from 'redux-saga/effects';

import {articleTypes} from './article.types';
import firebase, {firestore} from "../../firebase/firebase.utils";
import {
  addArticleFailure,
  addArticleSuccess, addCommentToArticleFailure, addCommentToArticleSuccess,
  fetchArticlesFailure,
  fetchArticlesSuccess,
  removeArticleFailure, removeArticleSuccess
} from "./article.actions";

export function* fetchArticlesAsync() {
  try {
    const articlesRef = firestore.collection("articles");
    const articlesSnapshot = yield articlesRef.get();
    const articles = yield articlesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    articles.sort((a, b) => {
      return new Date(b.publishedDate) - new Date(a.publishedDate);
    });
    yield put(fetchArticlesSuccess(articles));
  } catch(error) {
    yield put(fetchArticlesFailure(error));
  }
}

export function* onFetchArticlesStart() {
  yield takeLatest(articleTypes.FETCH_ARTICLES_START, fetchArticlesAsync);
}

export function* addArticleAsync({payload}) {
  try {
    const newArticleRef = yield firestore.collection('articles').add(payload);
    const snapshot = yield newArticleRef.get();
    const articleData = yield snapshot.data();
    yield put(addArticleSuccess({id: snapshot.id, ...articleData}));
  } catch (error) {
    yield put(addArticleFailure(error));
  }
}

export function* onAddArticleStart() {
  yield takeLatest(articleTypes.ADD_ARTICLE_START, addArticleAsync);
}

export function* removeArticleAsync({payload : articleId}) {
  try {
    const articleRef = firestore.doc(`articles/${articleId}`);
    yield articleRef.delete();
    yield put(removeArticleSuccess(articleId));
  } catch (error) {
    yield put(removeArticleFailure(error));
  }
}

export function* onRemoveArticleStart() {
  yield takeLatest(articleTypes.REMOVE_ARTICLE_START, removeArticleAsync);
}

export function* addCommentToArticleAsync({payload: commentData}) {
  try {
    const articleRef = firestore.doc(`articles/${commentData.articleId}`);
    yield articleRef.update({comments: firebase.firestore.FieldValue.arrayUnion(commentData)});
    yield put(addCommentToArticleSuccess(commentData));
  } catch(error) {
    yield put(addCommentToArticleFailure(error));
  }
}

export function* onAddCommentToArticleStart() {
  yield takeLatest(articleTypes.ADD_COMMENT_TO_ARTICLE_START, addCommentToArticleAsync);
}

export function* articleSagas() {
  yield all([
    call(onFetchArticlesStart),
    call(onAddArticleStart),
    call(onRemoveArticleStart),
    call(onAddCommentToArticleStart),
  ])
}