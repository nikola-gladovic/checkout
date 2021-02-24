// Login
Cypress.Commands.add("login", user => {
  cy.visit("/login");

  // enter user information
  cy.get("input[type=email]").type(user.email);
  cy.get("input[type=password]").type(user.password);

  // click login button
  cy.get("button.login").click();

  cy.url().should("include", "/dashboard");
});