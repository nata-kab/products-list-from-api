import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedId } from "../../store/slices/apiFilterParamsSlice";
import { RootState } from "../../store/store";

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
    <input
      placeholder="Search by id"
      value={selectedId}
      onChange={(event) => handleChange(event)}
      type="text"
    />
  );
};
export default FilterInput;
