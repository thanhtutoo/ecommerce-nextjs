import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../ui/Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductDetails from "@/components/products/ProductDetails";

const product = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ],
};
test("renders a button with the correct text", async () => {
  const mockOnChange = jest.fn();
  render(
    <>
      <Header onCartIconClick={mockOnChange} />
      <ProductDetails product={product} />
    </>
  );
  expect(screen.getByTestId("product-add-to-cart")).toBeInTheDocument();
  const addToCardBtn = screen.getByRole("buttonAddToCart");
  userEvent.click(addToCardBtn);

  expect(screen.getByTestId("go-to-cart")).toBeInTheDocument();
  expect(await screen.findByText("1")).toBeInTheDocument();
});
