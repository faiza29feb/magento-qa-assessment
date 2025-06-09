class ProductPage {
  addProductToCart(product) {
    cy.visit(product.url)
    cy.get(product.sizeSelector).click()
    cy.get(product.colorSelector).click()
    cy.get('button[title="Add to Cart"]').click()
  }
}

export default ProductPage
