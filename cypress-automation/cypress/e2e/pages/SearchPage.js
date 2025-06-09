class SearchPage {
  searchProduct(searchTerm) {
    cy.get('#search').type(`${searchTerm}{enter}`)
  }

  verifyResults(term) {
    cy.get('.product-item').should('contain.text', term)
  }
}

export default SearchPage
