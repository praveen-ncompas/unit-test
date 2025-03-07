import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Test App", () => {
  render(<App />);
  const element = screen.getByText(/Test App/i);
  expect(element).toBeInTheDocument();
});
