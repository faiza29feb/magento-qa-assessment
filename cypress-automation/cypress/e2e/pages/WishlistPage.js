class WishlistPage {
  visitProductAndAddToWishlist(product) {
    cy.visit(product.url)

    // Click "Add to Wish List"
    cy.get('a[title="Add to Wish List"]', { timeout: 10000 }).first().click()

    // Wait for success confirmation
    cy.get('.message-success', { timeout: 10000 }).should(
      'contain.text',
      'has been added to your Wish List'
    )
  }

  goToWishlist() {
    cy.visit('/wishlist/')

    // More reliable check than .wishlist-items-wrapper
    cy.get('.product-item', { timeout: 10000 }).should('exist')
  }

  moveToCartFromWishlist() {
  cy.get('.wishlist-items-wrapper', { timeout: 10000 }).should('exist')

  cy.get('.wishlist-items-wrapper')
    .find('button[title="Add to Cart"]')
    .first()
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true })
}
}

export default WishlistPage
