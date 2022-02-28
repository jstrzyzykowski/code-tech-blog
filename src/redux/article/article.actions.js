import { articleTypes } from './article.types';

export const fetchArticlesStart = () => ({
  type: articleTypes.FETCH_ARTICLES_START,
});
export const fetchArticlesSuccess = (articles) => ({
  type: articleTypes.FETCH_ARTICLES_SUCCESS,
  payload: articles,
})
export const fetchArticlesFailure = (error) => ({
  type: articleTypes.FETCH_ARTICLES_FAILURE,
  payload: error,
});

export const addArticleStart = (articleData) => {
  return {
    type: articleTypes.ADD_ARTICLE_START,
    payload: articleData,
  };
}
export const addArticleSuccess = (fetchedArticle) => {
  return {
    type: articleTypes.ADD_ARTICLE_SUCCESS,
    payload: fetchedArticle
  };
}
export const addArticleFailure = (error) => {
  return {
    type: articleTypes.ADD_ARTICLE_FAILURE,
    payload: error,
  }
}

export const removeArticleStart = (articleId) => {
  return {
    type: articleTypes.REMOVE_ARTICLE_START,
    payload: articleId,
  }
}
export const removeArticleSuccess = (articleId) => {
  return {
    type: articleTypes.REMOVE_ARTICLE_SUCCESS,
    payload: articleId
  }
}
export const removeArticleFailure = (error) => {
  return {
    type: articleTypes.REMOVE_ARTICLE_FAILURE,
    payload: error,
  }
}

export const addCommentToArticleStart = (commentData) => {
  return {
    type: articleTypes.ADD_COMMENT_TO_ARTICLE_START,
    payload: commentData,
  }
}
export const addCommentToArticleSuccess = (commentData) => {
  return {
    type: articleTypes.ADD_COMMENT_TO_ARTICLE_SUCCESS,
    payload: commentData,
  }
}
export const addCommentToArticleFailure = (error) => {
  return {
    type: articleTypes.ADD_COMMENT_TO_ARTICLE_FAILURE,
    payload: error,
  }
}