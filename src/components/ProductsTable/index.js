import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductsTable.css";

const ProductsTable = ({ selectedId, selectedPageNumber, setApiError }) => {
  const [products, setProducts] = useState([]);
  const [productToShow, setProductToShow] = useState(null);

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
        : `?per_page=5&page=${selectedPageNumber}`;
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
  }, [selectedId, selectedPageNumber]);

  const handleOpenModal = (item) => {
    setProductToShow(item);
  };

  const handleCloseModal = () => {
    setProductToShow(null);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-title-row">
            <td className="table-title-cell">Id</td>
            <td className="table-title-cell">Name</td>
            <td className="table-title-cell">Year</td>
          </tr>
          {products &&
            products.map((item, index) => {
              return (
                <tr
                  className="table-row"
                  onClick={() => handleOpenModal(item)}
                  key={index + item.name}
                >
                  <td className="table-cell">{item.id}</td>
                  <td className="table-cell">{item.name}</td>
                  <td className="table-cell">{item.year}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {productToShow && (
        <div className="product-container">
          <p>Id: {productToShow.id} </p>

          <p>Name: {productToShow.name}</p>
          <p>Year: {productToShow.year}</p>
          <p>Color: {productToShow.color}</p>
          <p>Pantone value: {productToShow.pantone_value}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </>
  );
};
export default ProductsTable;
