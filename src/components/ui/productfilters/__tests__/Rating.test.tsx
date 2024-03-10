import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Rating from "../Rating";

describe("Rating", () => {
  it("should call onChange with the correct star value when a star button is clicked", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Rating selectedStar={3} onChange={onChangeMock} />
    );

    const starButton = getByTestId("rating-4");
    fireEvent.click(starButton);

    expect(onChangeMock).toHaveBeenCalledWith(4);
  });

  it("should render stars with correct styles based on selectedStar value", () => {
    const { getByTestId } = render(
      <Rating selectedStar={2} onChange={() => {}} />
    );

    for (let i = 1; i <= 5; i++) {
      const starButton = getByTestId(`rating-${i}`);
      const starIcon = starButton.querySelector("svg");

      if (i <= 2) {
        expect(starIcon).toHaveStyle("color: #e9b306"); // Active star color
      } else {
        expect(starIcon).toHaveStyle("color: #d1d5db"); // Inactive star color
      }
    }
  });

  it("should have correct accessibility attributes for each star button", () => {
    const { getByTestId } = render(
      <Rating selectedStar={3} onChange={() => {}} />
    );

    for (let i = 1; i <= 5; i++) {
      const starButton = getByTestId(`rating-${i}`);

      expect(starButton).toHaveAttribute("role", "radio");
      expect(starButton).toHaveAttribute(
        "aria-label",
        `${i} star${i === 1 ? "" : "s"}`
      );
    }
  });
});
