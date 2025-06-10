import WishlistPage from '../pages/WishlistPage'
import CartPage from '../pages/CartPage'
import testData from '../../fixtures/testData.json'

describe('Add Products to Wishlist and Checkout', () => {
  const wishlistPage = new WishlistPage()
  const cartPage = new CartPage()
before(() => {
  cy.visit('/customer/account/login/')

  // Login using test data
  cy.get('#email', { timeout: 10000 }).should('be.visible').type(testData.user.email)
  cy.get('#pass').type(testData.user.password, { log: false })
  cy.get('#send2').click()

  // Wait for redirect to account page
  cy.url({ timeout: 10000 }).should('include', '/customer/account/')

  // Confirm welcome message has first name
  cy.get('.greet.welcome', { timeout: 10000 }).should('contain.text', testData.user.firstName)
})
  it('adds product to wishlist and moves to cart', () => {
    wishlistPage.visitProductAndAddToWishlist(testData.products[2])
    wishlistPage.goToWishlist()
    wishlistPage.moveToCartFromWishlist()
    cartPage.visit()
    cartPage.verifyCartTotal()
  })
})
