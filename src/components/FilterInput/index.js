import React from "react";

const FilterInput = ({ inputValue, setInputValue }) => {
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
