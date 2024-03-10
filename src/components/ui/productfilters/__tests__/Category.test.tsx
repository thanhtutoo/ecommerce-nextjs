import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Category from "../Category";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("renders a button with the correct text", async () => {
  const mockOnChange = jest.fn();
  render(
    <Category
      categories={["Phone", "Laptop", "Skincare"]}
      value="all"
      onChange={mockOnChange}
    />
  );
  const selectButton = screen.getByRole("buttonSelect");
  userEvent.click(selectButton);
  await waitFor(() => {
    // should open dropdown
    expect(screen.getAllByRole("option")[0]).toBeInTheDocument();
    // should see the option in the dropdown
    expect(screen.queryByText("Laptop")).toBeInTheDocument();
  });

  const selectLaptop = screen.getByText("Laptop");
  await userEvent.click(selectLaptop);
  // should close the dropdown
  expect(screen.queryByRole("option")).not.toBeInTheDocument();
  // should call onChange after the selected laptop
  await waitFor(() => {
    expect(mockOnChange).toHaveBeenCalledWith("Laptop");
  });
});
