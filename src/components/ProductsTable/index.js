import React from "react";
import "./ProductsTable.css";

const products = [
  { id: 1, name: "t-shirt", year: 2012 },
  { id: 2, name: "blouse", year: 2012 },
  { id: 3, name: "trousers", year: 2016 },
  { id: 4, name: "hat", year: 2011 },
  { id: 5, name: "skirt", year: 2000 },
];

const ProductsArray = () => {
  return (
    <div className="table-container">
      <div className="row-wrapper">
        <div className="table-title-cell-wrapper">Id</div>
        <div className="table-title-cell-wrapper">Name</div>
        <div className="table-title-cell-wrapper">Year</div>
      </div>
      {products.map((item, index) => {
        return (
          <div className="row-wrapper" key={index + item.name}>
            <div className="table-cell-wrapper">{item.id}</div>
            <div className="table-cell-wrapper">{item.name}</div>
            <div className="table-cell-wrapper">{item.year}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsArray;
