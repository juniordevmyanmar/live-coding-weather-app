import { render, screen } from "@testing-library/react";
import MiniCard from ".";

test("renders MiniCard Component", () => {
  render(<MiniCard datetime={1608879600} iconcode="10d" temperature={25} />);
  const dateElement = screen.getByText(/Dec 25, 2020/i);
  const imageElement = screen.getByAltText(/10d/i);
  expect(dateElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
