import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsDataPattern {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export interface ApiDataState {
  products: ProductsDataPattern[];
  apiErrorCode: number | string;
  apiResponseTextStatus: string;
  totalPagesNumber: number;
}

export const initialState: ApiDataState = {
  products: [],
  apiErrorCode: "",
  apiResponseTextStatus: "",
  totalPagesNumber: 3,
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    editApiProductsData: (
      state,
      action: PayloadAction<{
        selectedProducts: ProductsDataPattern[];
        totalPagesNumber: number;
      }>
    ) => {
      state.products = action.payload.selectedProducts;
      state.totalPagesNumber = action.payload.totalPagesNumber;
    },
    addApiResponseStatus: (
      state,
      action: PayloadAction<{
        statusText: string;
        statusNumber: number | string;
      }>
    ) => {
      state.apiResponseTextStatus = action.payload.statusText;
      state.apiErrorCode = action.payload.statusNumber;
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
