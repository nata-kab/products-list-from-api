import "./MainPage.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import useHandleProductRoute from "../../helpers/useHandleProductRoute";
import { RootState } from "../../store/store";

const MainPage: FC = () => {
  const { apiErrorCode, apiResponseTextStatus } = useSelector(
    (state: RootState) => state.apiData
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
