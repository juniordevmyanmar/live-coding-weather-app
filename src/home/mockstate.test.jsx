import { render, screen } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import Home from ".";
const mockresponse = [
  {
    city: "Rangoon",
    lat: "16.8000",
    lng: "96.1500",
    country: "Burma",
    iso2: "MM",
    admin_name: "Yangon",
    capital: "primary",
    population: "5430000",
    population_proper: "5430000",
  },
  {
    city: "Mandalay",
    lat: "21.9769",
    lng: "96.0869",
    country: "Burma",
    iso2: "MM",
    admin_name: "Mandalay",
    capital: "admin",
    population: "1225546",
    population_proper: "1225546",
  },
];

jest.mock("../hz", () => ({
  HZAPIHook: () => {
    return {
      loading: false,
      data: mockresponse,
    };
  },
}));

describe("Home Component Mock Response", () => {
  test("should Render Country List", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const loadingComponent = screen.getAllByTestId("location");
    expect(loadingComponent.length).toEqual(2);
  });
});
