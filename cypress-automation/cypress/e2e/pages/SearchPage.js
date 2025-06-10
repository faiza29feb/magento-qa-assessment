class SearchPage {
  visitHomePage() {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search', { timeout: 10000 }).should('be.visible')
  }

  searchProduct(searchTerm) {
    // Ensure it's visible before typing
    cy.get('#search', { timeout: 10000 }).should('be.visible').type(`${searchTerm}{enter}`)
  }

  verifyResults(term) {
    cy.get('.product-item', { timeout: 10000 }).should('contain.text', term)
  }
}

export default SearchPage
