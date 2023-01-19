import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialApiFilterParams } from "../store/slices/apiFilterParamsSlice";
import { useNavigate, useParams } from "react-router-dom";

const useHandleProductRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pageNumber, productId } = useParams();

  const { selectedId, selectedPageNumber } = useSelector(
    (state) => state.apiFilterParams
  );

  useEffect(() => {
    const page = pageNumber ? pageNumber : 1;
    const id = productId ? productId : "";
    dispatch(addInitialApiFilterParams({ id: id, pageNumber: page }));
  }, []);

  useEffect(() => {
    navigate(`${selectedPageNumber}/${selectedId}`);
  }, [selectedPageNumber, selectedId]);
};

export default useHandleProductRoute;
