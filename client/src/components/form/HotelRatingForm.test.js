import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HotelRatingForm from "./HotelRatingForm";

describe("HotelRatingForm", () => {
  it("should handle rating change", () => {
    const { getByLabelText } = render(<HotelRatingForm />);
    const ratingSelect = getByLabelText("Rate this hotel:");
    fireEvent.change(ratingSelect, { target: { value: "3" } });
    expect(ratingSelect.value).toBe("3");
  });
});

it("should submit the form with a selected rating", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
    })
  );

  const onReviewSubmitted = jest.fn();

  const { getByText, getByLabelText } = render(
    <HotelRatingForm
      hotelId="123"
      userId="456"
      onReviewSubmitted={onReviewSubmitted}
    />
  );

  const ratingSelect = getByLabelText("Rate this hotel:");
  fireEvent.change(ratingSelect, { target: { value: "4" } });

  const submitButton = getByText("Submit Rating");
  fireEvent.click(submitButton);

  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:8800/api/ratings/123/rate",
    expect.objectContaining({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "456",
        hotel: "123",
        rating: "4",
      }),
    })
  );
  expect(onReviewSubmitted).toHaveBeenCalledWith("4");
});
