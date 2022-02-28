import {useState} from 'react';

export function usePaginate(itemList, itemsPerPage) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsAlreadyDisplayed = pageNumber * itemsPerPage;
  const totalPageNumber = Math.ceil(itemList.length / itemsPerPage);

  const itemsToDisplay = itemList.slice(itemsAlreadyDisplayed, itemsAlreadyDisplayed + itemsPerPage);

  const handlePageChange = ({selected}) => {
    setPageNumber(selected);
  }

  return [totalPageNumber, itemsToDisplay, handlePageChange];
}