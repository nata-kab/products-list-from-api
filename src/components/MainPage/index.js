import React, { useEffect, useState } from "react";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import "./MainPage.css";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [apiError, setApiError] = useState({});

  const handleApiResponse = (response) => {
    !response.ok &&
      setApiError({ status: response.status, statusText: response.statusText });
  };
  const handleAPiDataResponse = (productsFromApi) => {
    if (productsFromApi === undefined) {
      return;
    } else {
      setProducts(
        Array.isArray(productsFromApi) ? productsFromApi : [productsFromApi]
      );
    }
  };

  const getApiData = async () => {
    const query =
      selectedId !== ""
        ? `?id=${selectedId}`
        : `?per_page=5&page=${selectedPage}`;
    try {
      const apiResponse = await fetch("https://reqres.in/api/products" + query);
      console.log(apiResponse);

      handleApiResponse(apiResponse);

      const apiResponseJSON = await apiResponse.json();

      const productsFromApi = apiResponseJSON.data;
      handleAPiDataResponse(productsFromApi);
    } catch (e) {
      console.log("Bad response from server", e);
    }
  };

  useEffect(() => {
    setApiError("");
    getApiData();
  }, [selectedId, selectedPage]);

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
      <ProductsTable products={products} />
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default MainPage;
