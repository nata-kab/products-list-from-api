import { screen } from "@testing-library/react";

import { renderWithReduxState } from "../../../test-utils";
import ProductsTable from "../index";

afterEach(() => {
  jest.resetAllMocks();
});

describe(`ProductsTable`, () => {
  it(`renders ProductsTable component`, () => {
    renderWithReduxState(<ProductsTable />);

    expect(screen.getByRole("row")).toBeInTheDocument();
  });
});
