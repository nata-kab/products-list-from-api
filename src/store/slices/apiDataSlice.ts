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
}

const initialState: ApiDataState = {
  products: [],
  apiErrorCode: "",
  apiResponseTextStatus: "",
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    editApiProductsData: (
      state,
      action: PayloadAction<ProductsDataPattern[]>
    ) => {
      state.products = action.payload;
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
