import React from 'react';

import './pagination.styles.scss';
import ReactPaginate from "react-paginate";

export default function Pagination({totalPageNumber, handlePageChange}) {
  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={<i className="fas fa-caret-left"/>}
        nextLabel={<i className="fas fa-caret-right"/>}
        pageCount={totalPageNumber}
        onPageChange={handlePageChange}
        containerClassName="paginationButtons"
        previousLinkClassName="previousButton"
        nextLinkClassName="nextButton"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}