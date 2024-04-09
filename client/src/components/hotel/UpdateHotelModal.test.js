import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import UpdateHotelModal from "./UpdateHotelModal";

jest.mock("axios");

describe("UpdateHotelModal", () => {
  const hotel = {
    _id: "123",
    name: "Test Hotel",
    type: "Luxury",
    city: "New York",
    address: "123 Test St",
    distance: "1 mile",
    photos: ["photo1.jpg", "photo2.jpg"],
    title: "Luxurious Accommodation",
    desc: "Lorem ipsum dolor sit amet.",
    rating: 4,
    cheapestPrice: 200,
    featured: true,
  };

  it("should render the form with initial values", () => {
    const { getByLabelText } = render(
      <UpdateHotelModal hotel={hotel} onClose={() => {}} />
    );

    expect(getByLabelText("Name:")).toHaveValue("Test Hotel");
    expect(getByLabelText("Type:")).toHaveValue("Luxury");
    expect(getByLabelText("City:")).toHaveValue("New York");
    expect(getByLabelText("Address:")).toHaveValue("123 Test St");
    expect(getByLabelText("Distance:")).toHaveValue("1 mile");
    expect(getByLabelText("Title:")).toHaveValue("Luxurious Accommodation");
    expect(getByLabelText("Description:")).toHaveValue(
      "Lorem ipsum dolor sit amet."
    );
    expect(getByLabelText("Rating:")).toHaveValue(4);
    expect(getByLabelText("Cheapest Price:")).toHaveValue(200);
    expect(getByLabelText("Featured:")).toBeChecked();
  });

  it("should update form state on input change", () => {
    const { getByLabelText } = render(
      <UpdateHotelModal hotel={hotel} onClose={() => {}} />
    );

    const nameInput = getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "Updated Hotel" } });
    expect(nameInput).toHaveValue("Updated Hotel");

    const ratingInput = getByLabelText("Rating:");
    fireEvent.change(ratingInput, { target: { value: "5" } });
    expect(ratingInput).toHaveValue(5);
  });

  it("should submit the form with updated data", async () => {
    axios.put.mockResolvedValueOnce({});

    const onClose = jest.fn();
    const { getByText } = render(
      <UpdateHotelModal hotel={hotel} onClose={onClose} />
    );

    fireEvent.submit(getByText("Update Hotel"));

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`/hotels/${hotel._id}`, {
        name: "Test Hotel",
        type: "Luxury",
        city: "New York",
        address: "123 Test St",
        distance: "1 mile",
        photos: ["photo1.jpg", "photo2.jpg"],
        title: "Luxurious Accommodation",
        desc: "Lorem ipsum dolor sit amet.",
        rating: 4,
        rooms: [],
        cheapestPrice: 200,
        featured: true,
      });
      expect(onClose).toHaveBeenCalled();
    });
  });

  it("should call onClose when cancel button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <UpdateHotelModal hotel={hotel} onClose={onClose} />
    );

    fireEvent.click(getByText("Cancel"));

    expect(onClose).toHaveBeenCalled();
  });
});
