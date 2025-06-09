import WishlistPage from '../pages/WishlistPage'
import CartPage from '../pages/CartPage'
import testData from '../../fixtures/testData.json'

describe('Add Products to Wishlist and Checkout', () => {
  const wishlistPage = new WishlistPage()
  const cartPage = new CartPage()

  it('adds product to wishlist and moves to cart', () => {
    wishlistPage.visitProductAndAddToWishlist(testData.products[2])
    wishlistPage.goToWishlist()
    wishlistPage.moveToCartFromWishlist()
    cartPage.visit()
    cartPage.verifyCartTotal()
  })
})
