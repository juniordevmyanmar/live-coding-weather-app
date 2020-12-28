import { render, screen } from "@testing-library/react";
import Home from ".";
describe("Home Component", () => {
  test("is 1+1 = 2", () => {
    expect(1 + 1).toEqual(2);
  });

  test("should Render Loading Screen", () => {
    render(<Home />);
    const loadingComponent = screen.getByTestId("loading-component");
    expect(loadingComponent).toBeInTheDocument();
  });
});
