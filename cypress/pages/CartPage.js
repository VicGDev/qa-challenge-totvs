class CartPage {
  validateProductQuantity(expectedQuantity) {
    cy.get('.cart_quantity button')
      .should('have.text', expectedQuantity)
  }

  validateProductTotal() {
    cy.get('.cart_price').then(($price) => {
      const unitPrice = Number($price.text().replace('Rs.', '').trim())

      cy.get('.cart_quantity').then(($quantity) => {
        const quantity = Number($quantity.text().trim())

        cy.get('.cart_total_price').then(($total) => {
          const total = Number($total.text().replace('Rs.', '').trim())

          expect(total).to.equal(unitPrice * quantity)
        })
      })
    })
  }
}

export default new CartPage()