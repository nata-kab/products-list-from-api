import React, { useEffect, useState } from "react";
import FilterInput from "../FilterInput";
import ProductsTable from "../ProductsTable";
import "./MainPage.css";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);

  const getApiData = async () => {
    const query =
      selectedId !== ""
        ? `?id=${selectedId}`
        : `?per_page=5&page=${selectedPage}`;
    try {
      const apiResponse = await fetch("https://reqres.in/api/products" + query);

      const apiResponseJSON = await apiResponse.json();

      const productsFromApi = apiResponseJSON.data;

      if (productsFromApi === undefined) {
        return;
      } else {
        setProducts(
          Array.isArray(productsFromApi) ? productsFromApi : [productsFromApi]
        );
      }
    } catch (e) {
      console.log("Bad response from server", e);
    }
  };

  useEffect(() => {
    console.log("useEffect");

    getApiData();
  }, [selectedId, selectedPage]);

  return (
    <div className="page-container">
      <h1>Products</h1>
      <FilterInput inputValue={selectedId} setInputValue={setSelectedId} />
      <ProductsTable products={products} />
    </div>
  );
};

export default MainPage;
