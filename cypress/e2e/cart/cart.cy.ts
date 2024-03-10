describe("test cart", () => {
  it("the add to cart button should work in product detail page", () => {
    // Visit the product detail page
    cy.visit("/product/1");

    // Click the "Add to Cart" button
    cy.get('[data-cy-btn="product-add-to-cart"]').click();

    // Verify that the cart total is updated to 1
    cy.get('[data-cy-cart-info="total"]').should("have.text", "1");

    // Click the increment button in the quantity counter
    cy.get('[data-cy-btn="counter-increment"]').click();

    // Click the "Add to Cart" button again
    cy.get('[data-cy-btn="product-add-to-cart"]').click();

    // Verify that the cart total is updated to 3
    cy.get('[data-cy-cart-info="total"]').should("have.text", "3");

    // Click the decrement button in the quantity counter
    cy.get('[data-cy-btn="counter-decrement"]').click();

    // Click the "Add to Cart" button again
    cy.get('[data-cy-btn="product-add-to-cart"]').click();

    // Verify that the cart total is updated to 4
    cy.get('[data-cy-cart-info="total"]').should("have.text", "4");
  });
});
