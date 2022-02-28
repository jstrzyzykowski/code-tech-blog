import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import './articles.styles.scss';
import ArticlesItem from "./articles-item/articles-item.component";
import { fetchArticlesStart } from "../../../../redux/article/article.actions";
import {createStructuredSelector} from "reselect";
import {selectArticles, selectIsArticlesLoaded} from "../../../../redux/article/article.selectors";
import AdminLoader from "../../admin-loader/loader.component";
import {openModal} from "../../../../redux/modal/modal.actions";
import {usePaginate} from "../../../../hooks/usePaginate/usePaginate.component";
import Pagination from "../../../../components/pagination/pagination.component";

export default function ArticlesPage() {
  const dispatch = useDispatch();
  const { articles, isLoaded } = useSelector(createStructuredSelector({
    articles: selectArticles,
    isLoaded: selectIsArticlesLoaded,
  }));
  const [totalPageNumber, itemsToDisplay, handlePageChange] = usePaginate(articles, 10);
  const articleList = useMemo(
    () => itemsToDisplay.map(
      (item, index) => <ArticlesItem key={item.id} index={index + 1} {...item}/>
    ),
    [itemsToDisplay]
  );

  useEffect(() => {
    dispatch(fetchArticlesStart());
  }, [dispatch]);


  if(!isLoaded) return <AdminLoader/>
  return (
    <>
      <div className="articlesPage__info">
        <button onClick={() => dispatch(openModal({modalType: "CreateArticleModal"}))}>
          {/*<i className="fas fa-plus-circle"/>*/}
          New Article
        </button>
      </div>
      <div className="articlesPage__list">
        {articleList}
      </div>
      {articles.length > 10 && <Pagination totalPageNumber={totalPageNumber} handlePageChange={handlePageChange}/>}
    </>
  );
}