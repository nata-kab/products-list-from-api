import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./slices/apiDataSlice";
import apiFilterParamsReducer from "./slices/apiFilterParamsSlice";

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    apiFilterParams: apiFilterParamsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
