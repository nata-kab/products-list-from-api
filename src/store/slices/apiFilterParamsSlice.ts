import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ApiFilterParamsState {
  selectedId: number | string;
  selectedPageNumber: number | string;
}

const initialState: ApiFilterParamsState = {
  selectedId: "",
  selectedPageNumber: "",
};

export const apiFilterParamsSlice = createSlice({
  name: "apiFilterParams",
  initialState,
  reducers: {
    addInitialApiFilterParams: (
      state,
      action: PayloadAction<{
        pageNumber: string | number;
        id: string | number;
      }>
    ) => {
      state.selectedPageNumber = action.payload.pageNumber;
      state.selectedId = action.payload.id;
    },
    editApiPageNumber: (state, action: PayloadAction<number | string>) => {
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
  addInitialApiFilterParams,
} = apiFilterParamsSlice.actions;

export default apiFilterParamsSlice.reducer;
