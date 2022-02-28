import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectArticle = (state) => state.article;

export const selectIsArticleAdding = createSelector(
  [selectArticle],
  (article) => article.isArticleAdding
);

export const selectIsFetching = createSelector(
  [selectArticle],
  (article) => article.isFetching
);

export const selectIsArticlesLoaded = createSelector(
  [selectArticle],
  (article) => !!article.articles
);

export const selectArticles = createSelector(
  [selectArticle],
  (article) => article.articles
);

export const selectParticularArticle = memoize((articleUniqueName) => createSelector(
  [selectArticles],
  (articles) => articles ? articles.find((article) => article.uniqueName === articleUniqueName) : null
));

export const selectCommentsOfParticularArticle = (articleId) => createSelector(
  [selectArticles],
  (articles) => {
    if(articles) {
      const searchedArticle = articles.find((article) => article.id === articleId);
      return searchedArticle.comments;
    }
    return null;
  }
);