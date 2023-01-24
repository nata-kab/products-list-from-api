import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiFilterParams } from "../store/slices/apiFilterParamsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

const useHandleProductRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pageNumber, productId } = useParams();

  const { selectedId, selectedPageNumber } = useSelector(
    (state: RootState) => state.apiFilterParams
  );

  useEffect(() => {
    const page: number = pageNumber ? Number(pageNumber) : 1;
    const id: number | string = productId ? productId : "";
    dispatch(addApiFilterParams({ id: id, pageNumber: page }));
  }, []);

  useEffect(() => {
    navigate(`products/${selectedPageNumber}/${selectedId}`);
  }, [selectedPageNumber, selectedId, productId]);
};

export default useHandleProductRoute;
