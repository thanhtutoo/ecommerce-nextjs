import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuantityCounter from "../QuantityCounter";

describe("QuantityCounter", () => {
  it("should decrement quantity when the decrement button is clicked", () => {
    const setQuantityMock = jest.fn();
    const { getByTestId } = render(
      <QuantityCounter quantity={5} setQuantity={setQuantityMock} />
    );

    fireEvent.click(getByTestId("decrement-quantity"));

    expect(setQuantityMock).toHaveBeenCalledWith(4);
  });

  it("should not allow quantity to go below 0 when the decrement button is clicked", () => {
    const setQuantityMock = jest.fn();
    const { getByTestId } = render(
      <QuantityCounter quantity={0} setQuantity={setQuantityMock} />
    );

    fireEvent.click(getByTestId("decrement-quantity"));

    expect(setQuantityMock).toHaveBeenCalledWith(0);
  });

  it("should increment quantity when the increment button is clicked", () => {
    const setQuantityMock = jest.fn();
    const { getByTestId } = render(
      <QuantityCounter quantity={3} setQuantity={setQuantityMock} />
    );

    fireEvent.click(getByTestId("increment-quantity"));

    expect(setQuantityMock).toHaveBeenCalledWith(4);
  });

  it("should decrement quantity when the increment button is clicked", () => {
    const setQuantityMock = jest.fn();
    const { getByTestId } = render(
      <QuantityCounter quantity={3} setQuantity={setQuantityMock} />
    );

    fireEvent.click(getByTestId("decrement-quantity"));

    expect(setQuantityMock).toHaveBeenCalledWith(2);
  });

  it("should update quantity when the input value changes", () => {
    const setQuantityMock = jest.fn();
    const { getByTestId } = render(
      <QuantityCounter quantity={2} setQuantity={setQuantityMock} />
    );

    const inputElement = getByTestId("quantity-input");
    fireEvent.change(inputElement, { target: { value: "5" } });

    expect(setQuantityMock).toHaveBeenCalledWith(5);
  });
});
