import { render, screen } from "@testing-library/react";
import App from "./App";

describe(`App`, () => {
  it(`renders the landing page`, () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
