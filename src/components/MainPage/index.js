import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialApiFilterParams } from "../../store/slices/apiFilterParamsSlice";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import "./MainPage.css";
import { useNavigate, useParams } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const { pageNumber, productId } = useParams();

  const { apiErrorCode, apiResponseTextStatus } = useSelector(
    (state) => state.apiData
  );
  const { selectedId, selectedPageNumber } = useSelector(
    (state) => state.apiFilterParams
  );

  const navigate = useNavigate();

  useEffect(() => {
    const page = pageNumber ? pageNumber : 1;
    const id = productId ? productId : "";
    dispatch(addInitialApiFilterParams({ id: id, pageNumber: page }));
  }, []);

  useEffect(() => {
    navigate(`${selectedPageNumber}/${selectedId}`);
  }, [selectedPageNumber, selectedId]);

  return (
    <div className="page-container">
      <h1>Products</h1>

      {apiErrorCode && (
        <p>
          Bad server response. Error code:
          {apiErrorCode} {apiResponseTextStatus}
        </p>
      )}

      <FilterInput />
      <ProductsTable />
      <Pagination />
    </div>
  );
};

export default MainPage;
