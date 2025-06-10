class WishlistPage {
  visitProductAndAddToWishlist(product) {
    cy.visit(product.url)
    cy.get('a[title="Add to Wish List"]').first().click()
  }

  goToWishlist() {
    cy.visit('/wishlist/')
  }

  moveToCartFromWishlist() {
    cy.get('button[title="Add to Cart"]').first().click()
  }
}

export default WishlistPage
