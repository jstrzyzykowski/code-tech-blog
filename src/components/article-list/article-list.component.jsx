import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
// import ReactPaginate from 'react-paginate';

import { createStructuredSelector } from 'reselect';
import {selectArticles} from "../../redux/article/article.selectors";

import ArticleListItem from '../article-list-item/article-list-item.component';

import './article-list.styles.scss';
import {usePaginate} from "../../hooks/usePaginate/usePaginate.component";
import Pagination from "../pagination/pagination.component";

export default function ArticleList() {
  const { articles } = useSelector(createStructuredSelector({
    articles: selectArticles,
  }));
  const [totalPageNumber, itemsToDisplay, handlePageChange] = usePaginate(articles, 10);
  const articleList = useMemo(
    () => itemsToDisplay.map((item) => <ArticleListItem key={item.id} {...item}/>), [itemsToDisplay]
  );

  return (
    <div className="articleList">
      <div className="articleList__list">
        {articleList}
      </div>
      {articles.length > 10 && <Pagination totalPageNumber={totalPageNumber} handlePageChange={handlePageChange}/>}
    </div>
  );
}
