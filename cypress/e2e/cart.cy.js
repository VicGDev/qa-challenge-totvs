import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

describe('Cart Inventory', () => {
  it('should add 4 units of a product to the cart and validate the total price', () => {
    ProductsPage.visit()
    ProductsPage.openFirstProductDetails()
    ProductsPage.setQuantity('4')
    ProductsPage.addToCart()
    ProductsPage.clickViewCart()

    CartPage.validateProductQuantity('4')
    CartPage.validateProductTotal()
  })
})