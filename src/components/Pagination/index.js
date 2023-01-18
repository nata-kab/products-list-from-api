import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editApiPageNumber } from "../../store/slices/apiFilterParamsSlice";

import "./Pagination.css";

const Pagination = () => {
  const { selectedId, selectedPageNumber } = useSelector(
    (state) => state.apiFilterParams
  );
  const dispatch = useDispatch();

  const handleChangePage = (action) => {
    let pageNumber = selectedPageNumber;

    switch (action) {
      case "next":
        ++pageNumber;
        break;
      case "previous":
        --pageNumber;
        break;
      default:
        ++pageNumber;
    }
    dispatch(editApiPageNumber(pageNumber));
  };

  return (
    <>
      {selectedId === "" && (
        <div className="pagination">
          {selectedPageNumber !== 1 && (
            <button onClick={() => handleChangePage("previous")}>
              Previous
            </button>
          )}
          <p className="page">{selectedPageNumber}</p>
          {selectedPageNumber !== 3 && (
            <button onClick={() => handleChangePage("next")}>Next</button>
          )}
        </div>
      )}
    </>
  );
};
export default Pagination;
