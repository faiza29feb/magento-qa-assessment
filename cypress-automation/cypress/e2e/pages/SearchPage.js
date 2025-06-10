class SearchPage {
  visitHomePage() {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search', { timeout: 10000 }).should('be.visible')
  }

  searchProduct(searchTerm) {
    // Ensure it's visible before typing
    cy.get('#search', { timeout: 10000 }).should('be.visible').type(`${searchTerm}{enter}`)
  }

  verifyResults(searchTerm) {
  cy.get('.product-item .product-item-link')
    .should('exist')
    .each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        expect(text.toLowerCase()).to.include(searchTerm.toLowerCase()) //to make the matching process easy
      });
    });
}
}

export default SearchPage
