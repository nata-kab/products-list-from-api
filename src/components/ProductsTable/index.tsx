import { useState } from "react";
import { useSelector } from "react-redux";

import "./ProductsTable.css";
import { ProductsDataPattern } from "../../store/slices/apiDataSlice";
import { RootState } from "../../store/store";
import useGetApiData from "../../helpers/useGetApiData";

const ProductsTable = () => {
  const [productToShow, setProductToShow] = useState<ProductsDataPattern>(null);
  const { products } = useSelector((state: RootState) => state.apiData);

  useGetApiData();

  const handleOpenModal = (item: ProductsDataPattern) => {
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
