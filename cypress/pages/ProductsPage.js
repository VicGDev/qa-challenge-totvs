class ProductsPage {
  visit() {
    cy.visit('/products')
  }

  openFirstProductDetails() {
    cy.contains('View Product').first().click()
  }

  setQuantity(quantity) {
    cy.get('#quantity')
      .clear()
      .type(quantity)
  }

  addToCart() {
    cy.contains('button', 'Add to cart').click()
  }

  clickViewCart() {
    cy.contains('View Cart').click()
  }
}

export default new ProductsPage()