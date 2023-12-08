import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const text = screen.getByText(/This app was deployed using GitHub Actions!/i);
  expect(text).toBeInTheDocument();
});
