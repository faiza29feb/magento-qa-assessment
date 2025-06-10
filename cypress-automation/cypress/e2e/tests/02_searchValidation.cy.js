import SearchPage from '../pages/SearchPage'
import testData from '../../fixtures/testData.json'

describe('Search and Validate Results', () => {
  const searchPage = new SearchPage()

  it('searches for a product and verifies result', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search', { timeout: 10000 }).should('be.visible').then(() => {
      searchPage.searchProduct(testData.searchTerm)
      searchPage.verifyResults(testData.searchTerm)
    })
  })
})
