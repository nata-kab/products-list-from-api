import React, { useState } from "react";

const FilterInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };

  return (
    <input
      placeholder="Search by id"
      value={inputValue}
      onChange={(event) => handleChange(event)}
      type="text"
    />
  );
};
export default FilterInput;
