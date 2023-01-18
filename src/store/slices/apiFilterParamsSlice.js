import { createSlice } from "@reduxjs/toolkit";

export const apiFilterParamsSlice = createSlice({
  name: "apiFilterParams",
  initialState: {
    selectedId: "",
    selectedPageNumber: "",
  },
  reducers: {
    addInitialApiFilterParams: (state, action) => {
      state.selectedPageNumber = action.payload.pageNumber;
      state.selectedId = action.payload.id;
    },
    editApiPageNumber: (state, action) => {
      state.selectedPageNumber = action.payload;
    },
    addSelectedId: (state, action) => {
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
