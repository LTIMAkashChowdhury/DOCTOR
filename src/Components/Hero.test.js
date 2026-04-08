import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

// ✅ Mock react-router-dom
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Hero Component", () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders hero headline text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Health comes first of all all/i)
    ).toBeInTheDocument();
  });

  test("renders main hero title", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Find your Doctor and make an Appointments/i)
    ).toBeInTheDocument();
  });

  test("renders Book Appointment button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", {
      name: /Book Appointment/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("navigates to /appointment when Book Appointment is clicked", () => {
    render(<Hero />);

    const button = screen.getByRole("button", {
      name: /Book Appointment/i,
    });

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/appointment");
  });

  test("renders doctor image", () => {
    render(<Hero />);
    const image = screen.getByAltText(/Doctor/i);
    expect(image).toBeInTheDocument();
  });

});
