import { articleTypes } from './article.types';

const initialState = {
  articles: null,
  isFetching: false,
  isArticleAdding: false,
  isArticleRemoving: false,
  isCommentAdding: false,
  error: null,
}

export default function articleReducer(state = initialState, {type, payload}) {
  switch (type) {
    case articleTypes.FETCH_ARTICLES_START:
      return {
        ...state,
        isFetching: true,
      };
    case articleTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articles: payload,
        error: null,
      };
    case articleTypes.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    case articleTypes.ADD_ARTICLE_START:
      return {
        ...state,
        isArticleAdding: true,
      }
    case articleTypes.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [payload, ...state.articles],
        isArticleAdding: false,
        error: null,
      }
    case articleTypes.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        isArticleAdding: false,
        error: payload,
      }
    case articleTypes.REMOVE_ARTICLE_START:
      return {
        ...state,
        isArticleRemoving: true,
      }
    case articleTypes.REMOVE_ARTICLE_SUCCESS:
      return {
        ...state,
        isArticleRemoving: false,
        articles: state.articles.filter((article) => article.id !== payload),
        error: null,
      }
    case articleTypes.REMOVE_ARTICLE_FAILURE:
      return {
        ...state,
        isArticleRemoving: false,
        error: payload,
      }
    case articleTypes.ADD_COMMENT_TO_ARTICLE_START:
      return {
        ...state,
        isCommentAdding: true,
      }
    case articleTypes.ADD_COMMENT_TO_ARTICLE_SUCCESS:
      return {
        ...state,
        isCommentAdding: false,
        articles: state.articles.map((article) => {
          if(article.id === payload.articleId) article.comments = [...article.comments, payload];
          return article;
        }),
        error: null,
      }
    case articleTypes.ADD_COMMENT_TO_ARTICLE_FAILURE:
      return {
        ...state,
        isCommentAdding: false,
        error: payload,
      }
    default:
      return state;
  }
}