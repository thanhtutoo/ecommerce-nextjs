describe("test product listing", () => {
  it("product listing should render product card and able to click to see detail", () => {
    cy.visit("/");
    cy.get('[data-cy="product-list"]').children().first().click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}product/1`);
  });
});
