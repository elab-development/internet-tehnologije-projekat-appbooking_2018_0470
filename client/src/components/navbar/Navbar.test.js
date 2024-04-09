import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../../context/AuthContext";

jest.mock("axios");

describe("Navbar Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Navbar correctly when user is not logged in", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText("mvbooking")).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("renders Navbar correctly when user is logged in", () => {
    const user = {
      username: "testuser",
      city: "Test City",
      country: "Test Country",
    };

    const { getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(getByText("mvbooking")).toBeInTheDocument();
    expect(
      getByText(`${user.username}, ${user.city}, ${user.country}`)
    ).toBeInTheDocument();
    expect(getByText("Logout")).toBeInTheDocument();
  });

  it("fetches weather data and displays it", async () => {
    const user = {
      username: "testuser",
      city: "Test City",
      country: "Test Country",
    };

    const weatherData = {
      data: {
        main: {
          temp: 20,
        },
      },
    };

    axios.get.mockResolvedValueOnce(weatherData);

    const { getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&units=metric&appid=6c7c6a462f348f58f0cd8bc3b458ce53`
      );
      expect(getByText(`${weatherData.data.main.temp} °C`)).toBeInTheDocument();
    });
  });

  it("logs out user when logout button is clicked", () => {
    const user = {
      username: "testuser",
      city: "Test City",
      country: "Test Country",
    };

    const logout = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user, logout }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(getByText("Logout"));

    expect(logout).toHaveBeenCalledTimes(1);
  });
});
