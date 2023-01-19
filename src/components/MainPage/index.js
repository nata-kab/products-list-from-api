import React from "react";
import "./MainPage.css";
import { useSelector } from "react-redux";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import useHandleProductRoute from "../../helpers/useHandleProductRoute";

const MainPage = () => {
  const { apiErrorCode, apiResponseTextStatus } = useSelector(
    (state) => state.apiData
  );

  useHandleProductRoute();

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
