import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders table title", () => {
  render(<App />);
  const tableTitle = screen.getByText(/Colors from api/i);
  expect(tableTitle).toBeInTheDocument();
});
