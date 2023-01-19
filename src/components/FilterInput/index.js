import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedId } from "../../store/slices/apiFilterParamsSlice";

const FilterInput = () => {
  const dispatch = useDispatch();
  const { selectedId } = useSelector((state) => state.apiFilterParams);

  const handleChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    dispatch(addSelectedId(value));
  };

  return (
    <input
      placeholder="Search by id"
      value={selectedId}
      onChange={(event) => handleChange(event)}
      type="text"
    />
  );
};
export default FilterInput;
