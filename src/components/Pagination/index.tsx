import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editApiPageNumber } from "../../store/slices/apiFilterParamsSlice";
import { RootState } from "../../store/store";

import "./Pagination.css";

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedPageNumber } = useSelector(
    (state: RootState) => state.apiFilterParams
  );

  const handleChangePage = (action: string) => {
    let pageNumber: number = Number(selectedPageNumber);

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
