import { screen, waitFor } from "@testing-library/react";

import { renderWithReduxState } from "../../../test-utils";
import FilterInput from "../index";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  jest.resetAllMocks();
});

describe(`FilterInput`, () => {
  it(`renders FilterInput component`, () => {
    renderWithReduxState(<FilterInput />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it(`id can be entered test`, async () => {
    renderWithReduxState(<FilterInput />);

    const input = await screen.findByRole("textbox");
    await waitFor(() => expect(input).toHaveValue(""));
    userEvent.clear(input);
    expect(input).toHaveValue("");
  });
});
