import { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editApiPageNumber } from "../../store/slices/apiFilterParamsSlice";
import { RootState } from "../../store/store";
import { Pagination } from "@mui/material";

import "./Pagination.css";

const TablePagination: FC = () => {
  const dispatch = useDispatch();
  const { totalPagesNumber } = useSelector((state: RootState) => state.apiData);
  const { selectedId, selectedPageNumber } = useSelector(
    (state: RootState) => state.apiFilterParams
  );

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    dispatch(editApiPageNumber(page));
  };

  return (
    <Pagination
      count={totalPagesNumber}
      page={selectedPageNumber}
      onChange={handlePageChange}
      disabled={selectedId === "" ? false : true}
      size={"large"}
      defaultPage={5}
      showFirstButton
      showLastButton
    />
  );
};
export default TablePagination;
