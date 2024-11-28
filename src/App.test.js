import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const buttonName = screen.getByText("Search ID");
  expect(buttonName).toBeInTheDocument();
});
