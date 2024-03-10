describe("test product listing", () => {
  it("the add to cart button should work in product detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="product-list"]').children().first().click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}product/1`);
  });
});
