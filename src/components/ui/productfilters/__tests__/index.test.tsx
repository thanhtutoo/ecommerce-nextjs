import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import ProductFilters from "../index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("ProductFilters renders and reset button works", () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push,
  });

  const handleQueryChange = jest.fn();
  const { getByText } = render(
    <ProductFilters handleQueryChange={handleQueryChange} />
  );

  const resetButton = getByText("Reset");

  fireEvent.click(resetButton);
  expect(push).toHaveBeenCalledWith(window.location.origin);
});
