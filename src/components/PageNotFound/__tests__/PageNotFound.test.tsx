import { render, screen } from "@testing-library/react";

import PageNotFound from "../index";

describe(`PageNotFound`, () => {
  it(`renders PageNotFound component`, () => {
    render(<PageNotFound />);

    expect(screen.getByText("Page not found. Error 404")).toBeInTheDocument();
  });
});
