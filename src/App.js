import React from "react";
import FilterInput from "./components/FilterInput";
import ProductsTable from "./components/ProductsTable";

function App() {
  return (
    <>
      <h1>Products</h1>
      <FilterInput />
      <ProductsTable />
    </>
  );
}

export default App;
