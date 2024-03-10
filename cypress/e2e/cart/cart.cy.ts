describe("test cart", () => {
  it("the add to cart button should work in product detail page", () => {
    cy.visit("/product/1");

    cy.get('[data-cy-btn="product-add-to-cart"]').click();
    cy.get('[data-cy-cart-info="total"]').should("have.text", "1");
    cy.get('[data-cy-btn="counter-increment"]').click();
    cy.get('[data-cy-btn="product-add-to-cart"]').click();
    cy.get('[data-cy-cart-info="total"]').should("have.text", "3");
    cy.get('[data-cy-btn="counter-decrement"]').click();
    cy.get('[data-cy-btn="product-add-to-cart"]').click();
    cy.get('[data-cy-cart-info="total"]').should("have.text", "4");
  });
});
