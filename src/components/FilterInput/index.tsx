import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedId } from "../../store/slices/apiFilterParamsSlice";
import { RootState } from "../../store/store";
import * as Styled from "./FilterInput.styled";

const FilterInput: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useSelector(
    (state: RootState) => state.apiFilterParams
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    dispatch(addSelectedId(value));
  };

  return (
    <Styled.Input
      placeholder="Search product by id"
      value={selectedId}
      onChange={(event) => handleChange(event)}
      type="text"
      status="active"
    />
  );
};
export default FilterInput;
