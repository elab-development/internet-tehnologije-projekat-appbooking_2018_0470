import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PropertyList from "./PropertyList";
import useFetch from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

describe("PropertyList Component", () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: [
        { type: "Hotel", count: 10 },
        { type: "Resort", count: 5 },
        { type: "Apartment", count: 8 },
      ],
      loading: false,
      error: null,
    });
  });

  it("renders loading state correctly", () => {
    useFetch.mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
    });

    const { getByText } = render(<PropertyList />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders data correctly", () => {
    const { getByText } = render(<PropertyList />);
    expect(getByText("Hotel")).toBeInTheDocument();
    expect(getByText("10 Hotel")).toBeInTheDocument();
    expect(getByText("Resort")).toBeInTheDocument();
    expect(getByText("5 Resort")).toBeInTheDocument();
    expect(getByText("Apartment")).toBeInTheDocument();
    expect(getByText("8 Apartment")).toBeInTheDocument();
  });

  it("renders pagination buttons and handles pagination correctly", () => {
    const { getByText } = render(<PropertyList />);

    const prevButton = getByText("Previous");
    const nextButton = getByText("Next");

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);

    expect(prevButton).not.toBeDisabled();

    fireEvent.click(prevButton);

    expect(prevButton).toBeDisabled();
  });
});
