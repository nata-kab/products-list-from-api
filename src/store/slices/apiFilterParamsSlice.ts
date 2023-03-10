import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ApiFilterParamsState {
  selectedId: number | string;
  selectedPageNumber: number;
}

export const initialState: ApiFilterParamsState = {
  selectedId: "",
  selectedPageNumber: 1,
};

export const apiFilterParamsSlice = createSlice({
  name: "apiFilterParams",
  initialState,
  reducers: {
    addApiFilterParams: (
      state,
      action: PayloadAction<{
        pageNumber: number;
        id: string | number;
      }>
    ) => {
      state.selectedPageNumber = action.payload.pageNumber;
      state.selectedId = action.payload.id;
    },
    editApiPageNumber: (state, action: PayloadAction<number>) => {
      state.selectedPageNumber = action.payload;
    },
    addSelectedId: (state, action: PayloadAction<number | string>) => {
      state.selectedId = action.payload;
    },
    removeSelectedId: (state) => {
      state.selectedId = "";
    },
  },
});

export const {
  editApiPageNumber,
  addSelectedId,
  removeSelectedId,
  addApiFilterParams,
} = apiFilterParamsSlice.actions;

export default apiFilterParamsSlice.reducer;
