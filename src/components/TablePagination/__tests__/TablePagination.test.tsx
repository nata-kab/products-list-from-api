import { screen } from "@testing-library/react";
import { renderWithReduxState } from "../../../test-utils";

import TablePagination from "../index";

describe(`PageNotFound`, () => {
  it(`renders PTablePagination component`, () => {
    renderWithReduxState(<TablePagination />);

    expect(
      screen.getByRole("navigation", { name: /pagination navigation/i })
    ).toBeInTheDocument();
  });
});
