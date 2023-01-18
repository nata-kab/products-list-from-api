import React, { useEffect, useState } from "react";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import "./MainPage.css";
import { useNavigate, useParams } from "react-router-dom";

const MainPage = () => {
  let { pageNumber } = useParams();
  const [selectedId, setSelectedId] = useState("");
  const [selectedPageNumber, setSelectedPageNumber] = useState(
    pageNumber ? pageNumber : 1
  );
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${selectedPageNumber}`);
  }, [selectedPageNumber]);

  return (
    <div className="page-container">
      <h1>Products</h1>

      {apiError && (
        <p>
          Bad server response. Error code:
          {apiError.status} {apiError.statusText}
        </p>
      )}
      <FilterInput inputValue={selectedId} setInputValue={setSelectedId} />
      <ProductsTable
        selectedPageNumber={selectedPageNumber}
        selectedId={selectedId}
        apiError={apiError}
        setApiError={setApiError}
      />
      <Pagination
        selectedPageNumber={selectedPageNumber}
        setSelectedPageNumber={setSelectedPageNumber}
      />
    </div>
  );
};

export default MainPage;
