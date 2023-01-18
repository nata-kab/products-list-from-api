import { useDispatch } from "react-redux";
import {
  editApiProductsData,
  addApiResponseStatus,
} from "../store/slices/apiDataSlice";

const getApiData = (selectedId, selectedPageNumber) => {
  const dispatch = useDispatch;

  const handleApiResponse = (response) => {
    !response.ok &&
      dispatch(
        addApiResponseStatus({
          statusNumber: response.status,
          statusText: response.statusText,
        })
      );
  };

  const handleAPiDataResponse = (productsFromApi) => {
    if (productsFromApi === undefined) {
      return;
    } else {
      const selectedProductsFromApi = Array.isArray(productsFromApi)
        ? productsFromApi
        : [productsFromApi];

      dispatch(editApiProductsData(selectedProductsFromApi));
    }
  };

  const getApiData = async () => {
    const query =
      selectedId !== ""
        ? `?id=${selectedId}`
        : `?per_page=5&page=${selectedPageNumber}`;
    try {
      const apiResponse = await fetch("https://reqres.in/api/products" + query);

      handleApiResponse(apiResponse);

      const apiResponseJSON = await apiResponse.json();

      const productsFromApi = apiResponseJSON.data;
      handleAPiDataResponse(productsFromApi);
    } catch (e) {
      console.log("Bad response from server", e);
    }
  };
  getApiData();
};
export default getApiData;
