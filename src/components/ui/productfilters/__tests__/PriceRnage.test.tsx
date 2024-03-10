import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PriceRange from "../PriceRange";

describe("PriceRange", () => {
  it("should update localValue when Min Price input changes", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <PriceRange value={[50, 100]} onChange={onChangeMock} />
    );

    const minPriceInput = getByLabelText("Min Price");
    fireEvent.change(minPriceInput, { target: { value: "75" } });

    expect(minPriceInput.value).toBe("75");
  });

  it("should update localValue when Max Price input changes", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <PriceRange value={[50, 100]} onChange={onChangeMock} />
    );

    const maxPriceInput = getByLabelText("Max Price");
    fireEvent.change(maxPriceInput, { target: { value: "150" } });

    expect(maxPriceInput.value).toBe("150");
  });

  it("should call onChange with the correct localValue when Apply button is clicked", () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <PriceRange value={[50, 100]} onChange={onChangeMock} />
    );

    const applyButton = getByText("Apply");
    fireEvent.click(applyButton);

    expect(onChangeMock).toHaveBeenCalledWith([50, 100]);
  });
});
