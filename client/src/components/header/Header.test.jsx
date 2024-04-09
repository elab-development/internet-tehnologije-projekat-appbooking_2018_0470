import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Header component", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});

test("updates destination state when input value changes", () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const input = getByPlaceholderText("Where are you going?");
  fireEvent.change(input, { target: { value: "New York" } });
  expect(input.value).toBe("New York");
});
