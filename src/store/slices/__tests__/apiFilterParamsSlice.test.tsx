import { cleanup } from "@testing-library/react";
import store from "../../store";
import {
  editApiPageNumber,
  addSelectedId,
  removeSelectedId,
  addApiFilterParams,
  initialState,
} from "../apiFilterParamsSlice";

const page: number = 3;
const productIdNumber: number = 4;
const productIdString: string = "7";
const initialStateId = initialState.selectedId;
const initialStatePageNumber = initialState.selectedPageNumber;

afterEach(() => {
  cleanup();
  store.dispatch(removeSelectedId());
  store.dispatch(
    addApiFilterParams({
      id: initialStateId,
      pageNumber: initialStatePageNumber,
    })
  );
});

describe(`apiFilterParamsSlice`, () => {
  test("expect initial api filter params to be equal to initial store", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(initialStateId);
    expect(state.selectedPageNumber).toBe(initialStatePageNumber);
  });
  test("add api filter params", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(initialStateId);
    expect(state.selectedPageNumber).toBe(initialStatePageNumber);

    store.dispatch(
      addApiFilterParams({ id: productIdNumber, pageNumber: page })
    );

    state = store.getState().apiFilterParams;

    expect(state.selectedPageNumber).toBe(3);
    expect(state.selectedId).toBe(4);
  });
  test("edit api page number", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedPageNumber).toBe(initialStatePageNumber);

    store.dispatch(editApiPageNumber(page));

    state = store.getState().apiFilterParams;

    expect(state.selectedPageNumber).toBe(3);
  });
  test("add selected id when providing number", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(initialStateId);

    store.dispatch(addSelectedId(productIdNumber));

    state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(4);
  });
  test("add selected id when providing string", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(initialStateId);

    store.dispatch(addSelectedId(productIdString));

    state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe("7");
  });
  test("remove selected id", () => {
    let state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe(initialStateId);

    store.dispatch(addSelectedId(productIdString));

    state = store.getState().apiFilterParams;

    expect(state.selectedId).toBe("7");

    store.dispatch(removeSelectedId());
  });
});
