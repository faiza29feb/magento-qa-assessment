import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import testData from '../../fixtures/testData.json'

describe('Place Order with Multiple Products', () => {
  const productPage = new ProductPage()
  const cartPage = new CartPage()

  it('adds multiple products and verifies cart total', () => {
    productPage.addProductToCart(testData.products[0])
    productPage.addProductToCart(testData.products[1])
    cartPage.visit()
    cartPage.verifyCartTotal()
  })
})
