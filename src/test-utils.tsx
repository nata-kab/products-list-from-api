import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import apiDataReducer from "./store/slices/apiDataSlice";
import apiFilterParamsReducer from "./store/slices/apiFilterParamsSlice";

export const renderWithReduxState = (ui: ReactNode, { actions = [] } = {}) => {
  const store = configureStore({
    reducer: {
      apiData: apiDataReducer,
      apiFilterParams: apiFilterParamsReducer,
    },
  });

  actions.forEach((action) => store.dispatch(action));

  const renderResult = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...renderResult,
    store,
  };
};
