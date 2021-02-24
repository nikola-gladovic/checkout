/// <reference types="cypress" />

// eslint-disable-next-line no-undef
context("Checkout", () => {
  it("checkout page displays", () => {
    cy.visit("/checkout");
    cy.wait(1000);

    // add products to cart
    cy.get('#add-product-btn-0').click();
    cy.wait(500);
    cy.get('#add-product-btn-3').click();

    // open edit product modal
    cy.wait(1000);
    cy.get('#edit-product-btn-0').click();
    // change price of the product
    cy.wait(1000);
    cy.get('input[name=price]').clear();
    cy.wait(10);
    cy.get('input[name=price]').type("45");
    cy.wait(500);
    // change offer of the product
    cy.get('input[name=offer-count]').clear();
    cy.wait(10);
    cy.get('input[name=offer-count]').type("3");
    cy.wait(500);
    cy.get('input[name=offer-price]').clear();
    cy.wait(10);
    cy.get('input[name=offer-price]').type("85");
    cy.wait(500);
    cy.get('input[name=offer-price]').clear();
    cy.wait(10);
    cy.get('input[name=offer-price]').type("140");
    cy.wait(500);
    cy.get('input[name=offer-price]').clear();
    cy.wait(10);
    cy.get('input[name=offer-price]').type("120");
    cy.wait(1000);
    cy.get('#save-btn').click();

    // remove product
    cy.wait(1000);
    cy.get('#remove-btn-1').click();
    cy.wait(500);
    cy.get('#remove-btn-1').click();
    cy.wait(500);
    cy.get('#remove-btn-1').click();
    cy.wait(500);
    cy.get('#remove-btn-1').click();
    cy.wait(500);
    cy.get('#remove-btn-1').click();

    // add products to cart
    cy.wait(500);
    cy.get('#add-product-btn-0').click();
    cy.wait(500);
    cy.get('#add-product-btn-1').click();
    cy.wait(1000);
    cy.get('#add-product-btn-0').click();
    cy.wait(500);
    cy.get('#add-product-btn-0').click();
  });
});
