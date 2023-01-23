import { cleanup } from "@testing-library/react";
import store from "../../store";
import {
  editApiProductsData,
  addApiResponseStatus,
  resetApiResponseStatus,
  ProductsDataPattern,
  initialState,
} from "../apiDataSlice";

afterEach(() => {
  cleanup();
  store.dispatch(
    editApiProductsData({
      selectedProducts: initialState.products,
      totalPagesNumber: initialState.totalPagesNumber,
    })
  );
  store.dispatch(resetApiResponseStatus());
});

describe(`apiDataSliceTest`, () => {
  test("expect initial api data slice params to be equal to initial store", () => {
    let state = store.getState().apiData;

    expect(state).toBe(initialState);
  });

  test("Updates the array of products data", () => {
    let state = store.getState().apiData;
    const initialBookCount = state.products.length;

    const product: ProductsDataPattern[] = [
      {
        id: 6,
        name: "test",
        year: 2016,
        color: "#53B0AE",
        pantone_value: "15-5217",
      },
    ];

    store.dispatch(
      editApiProductsData({ selectedProducts: product, totalPagesNumber: 3 })
    );
    state = store.getState().apiData;
    const addedProduct = state.products.find((product) => product.id === 6);
    expect(addedProduct?.name).toBe("test");
    expect(addedProduct?.year).toBe(2016);
    expect(addedProduct?.color).toBe("#53B0AE");
    expect(addedProduct?.pantone_value).toBe("15-5217");

    expect(state.products.length).toBeGreaterThan(initialBookCount);
  });
  test("Add api response status data", () => {
    let state = store.getState().apiData;

    expect(state.apiErrorCode).toBe("");
    expect(state.apiResponseTextStatus).toBe("");

    const statusNumber: number = 404;
    const statusText: string = "Error";

    store.dispatch(
      addApiResponseStatus({
        statusNumber: statusNumber,
        statusText: statusText,
      })
    );
    state = store.getState().apiData;
    const addedApiErrorCode = state.apiErrorCode;
    const addedApiResponseTextStatus = state.apiResponseTextStatus;
    expect(addedApiErrorCode).toBe(404);
    expect(addedApiResponseTextStatus).toBe("Error");
  });
  test("Reset api response status data", () => {
    let state = store.getState().apiData;

    const statusNumber: number = 404;
    const statusText: string = "Error";

    store.dispatch(
      addApiResponseStatus({
        statusNumber: statusNumber,
        statusText: statusText,
      })
    );
    state = store.getState().apiData;
    const addedApiErrorCode = state.apiErrorCode;
    const addedApiResponseTextStatus = state.apiResponseTextStatus;
    expect(addedApiErrorCode).toBe(404);
    expect(addedApiResponseTextStatus).toBe("Error");

    store.dispatch(resetApiResponseStatus());
    state = store.getState().apiData;
    expect(state.apiErrorCode).toBe("");
    expect(state.apiResponseTextStatus).toBe("");
  });
});
