import { renderHook, act } from "@testing-library/react";
import { CartStore, useCartStore } from "../../../stores/useCartStore";
import { Product } from "@/types";

describe("test cart", () => {
  let cart: { current: CartStore };
  beforeEach(() => {
    const { result } = renderHook(() => useCartStore());
    cart = result;
    console.log("my cart", cart);
  });

  afterEach(() => {
    act(() => {
      // cart.current.emptyCart();
    });
  });

  test("should add items to the cart", () => {
    act(() => {
      cart.current.addToCart(
        {
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
        },
        1
      );
      console.log("cart.current.cart", cart.current);
      // expect(cart.current.cart).toEqual([
      //   {
      //     id: 1,
      //     title: "Test Product",
      //     description: "string",
      //     price: 1,
      //     discountPercentage: 1,
      //     rating: 1,
      //     stock: 1,
      //     brand: "1",
      //     category: "1",
      //     thumbnail: "1",
      //     images: [],
      //     quantity: 1,
      //   },
      // ]);
    });

    // test("should remove items from the cart", () => {
    //   act(() => {
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product",
    //       price: 10,
    //     } as unknown as Product);
    //   });
    //   act(() => {
    //     cart.current.removeItem(1);
    //   });
    //   expect(cart.current.items).toEqual([]);
    // });

    // test("should remove all items with a specific ID from the cart", () => {
    //   act(() => {
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product 1",
    //       price: 10,
    //     } as unknown as Product);
    //     cart.current.addItem({
    //       id: 2,
    //       name: "Test Product 2",
    //       price: 20,
    //     } as unknown as Product);
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product 1",
    //       price: 10,
    //     } as unknown as Product);
    //   });

    //   act(() => {
    //     cart.current.removeAll(1);
    //   });

    //   expect(cart.current.items).toEqual([
    //     { id: 2, name: "Test Product 2", price: 20, quantity: 1 },
    //   ]);
    // });

    // test("should update item quantity in the cart", () => {
    //   act(() => {
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product",
    //       price: 10,
    //     } as unknown as Product);
    //   });

    //   act(() => {
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product",
    //       price: 10,
    //     } as unknown as Product);
    //   });

    //   expect(cart.current.items).toEqual([
    //     { id: 1, name: "Test Product", price: 10, quantity: 2 },
    //   ]);
    // });

    // test("should empty the cart", () => {
    //   act(() => {
    //     cart.current.addItem({
    //       id: 1,
    //       name: "Test Product 1",
    //       price: 10,
    //     } as unknown as Product);
    //     cart.current.addItem({
    //       id: 2,
    //       name: "Test Product 2",
    //       price: 20,
    //     } as unknown as Product);
    //   });

    //   act(() => {
    //     cart.current.emptyCart();
    //   });

    //   expect(cart.current.items).toEqual([]);
  });
});
