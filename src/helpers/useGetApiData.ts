import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editApiProductsData,
  addApiResponseStatus,
  resetApiResponseStatus,
  ProductsDataPattern,
} from "../store/slices/apiDataSlice";
import { RootState } from "../store/store";

const useGetApiData = () => {
  const dispatch = useDispatch();

  type ApiResponseStatusPattern = {
    isResponseOK: boolean;
    statusNumber: number;
    statusText: string;
  };

  const { selectedId, selectedPageNumber } = useSelector(
    (state: RootState) => state.apiFilterParams
  );

  const handleApiResponse = (apiResponseStatus: {
    isResponseOK: boolean;
    statusNumber: number;
    statusText: string;
  }) => {
    !apiResponseStatus.isResponseOK &&
      dispatch(
        addApiResponseStatus({
          statusNumber: apiResponseStatus.statusNumber,
          statusText: apiResponseStatus.statusText,
        })
      );
  };

  const handleAPiDataResponse = (
    productsFromApi: ProductsDataPattern[] | ProductsDataPattern | undefined,
    totalPagesNumber: number
  ) => {
    if (productsFromApi === undefined) {
      return;
    } else {
      const selectedProductsFromApi = Array.isArray(productsFromApi)
        ? productsFromApi
        : [productsFromApi];
      dispatch(
        editApiProductsData({
          selectedProducts: selectedProductsFromApi,
          totalPagesNumber: totalPagesNumber,
        })
      );
    }
  };

  const getApiData = async () => {
    const query: string =
      selectedId !== ""
        ? `?id=${selectedId}`
        : `?per_page=5&page=${selectedPageNumber}`;
    try {
      const apiResponse = await fetch("https://reqres.in/api/products" + query);

      const apiResponseStatus: ApiResponseStatusPattern = {
        isResponseOK: apiResponse.ok,
        statusNumber: apiResponse.status,
        statusText: apiResponse.statusText,
      };

      handleApiResponse(apiResponseStatus);

      const apiResponseJSON = await apiResponse.json();

      const totalPagesNumber = apiResponseJSON.total_pages;
      const productsFromApi = apiResponseJSON.data;

      handleAPiDataResponse(productsFromApi, totalPagesNumber);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    dispatch(resetApiResponseStatus());
    getApiData();
  }, [selectedId, selectedPageNumber]);
};
export default useGetApiData;
