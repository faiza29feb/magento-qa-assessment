class CartPage {
  visit() {
    cy.visit('/checkout/cart/')
  }

  verifyCartTotal() {
    cy.get('.grand.totals .price').should('exist')
  }
}

export default CartPage
