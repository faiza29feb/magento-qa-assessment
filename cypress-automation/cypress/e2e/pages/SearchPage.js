class SearchPage {
  visitHomePage() {
    ccy.visit('https://magento.softwaretestingboard.com')
    // Wait for the search box to appear
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
