import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
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

  test("should trigger onChange after debounce timeout", async () => {
    jest.useFakeTimers();

    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <PriceRange value={[0, 0]} onChange={onChangeMock} />
    );

    const minInput = getByLabelText("Min Price") as HTMLInputElement;
    const maxInput = getByLabelText("Max Price") as HTMLInputElement;

    await act(async () => {
      fireEvent.change(minInput, { target: { value: "50" } });
      fireEvent.change(maxInput, { target: { value: "100" } });
      // Fast-forward time
      jest.advanceTimersByTime(1500);

      // Wait for debounce timeout
      await waitFor(() => {
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith([50, 100]);
      });
    });
  });
});
