import { createSlice } from "@reduxjs/toolkit";

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    products: [],
    apiErrorCode: "",
    apiResponseTextStatus: "",
  },
  reducers: {
    editApiProductsData: (state, action) => {
      state.products = action.payload;
    },
    addApiResponseStatus: (state, action) => {
      state.apiResponseTextStatus = action.payload.statusText;
    },
    resetApiResponseStatus: (state) => {
      state.apiErrorCode = "";
      state.apiResponseTextStatus = "";
    },
  },
});

export const {
  editApiProductsData,
  addApiResponseStatus,
  resetApiResponseStatus,
} = apiDataSlice.actions;

export default apiDataSlice.reducer;
