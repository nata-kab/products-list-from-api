import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import apiDataReducer from "./store/slices/apiDataSlice";
import apiFilterParamsReducer from "./store/slices/apiFilterParamsSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        apiData: apiDataReducer,
        apiFilterParams: apiFilterParamsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
