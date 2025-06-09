class WishlistPage {
  visitProductAndAddToWishlist(product) {
    cy.visit(product.url)
    cy.get('a[title="Add to Wish List"]').click()
  }

  goToWishlist() {
    cy.visit('/wishlist/')
  }

  moveToCartFromWishlist() {
    cy.get('button[title="Add to Cart"]').click()
  }
}

export default WishlistPage
