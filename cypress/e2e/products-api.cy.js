describe('Products API', () => {
  it('should return a valid product list', () => {
    cy.request({
      method: 'GET',
      url: '/api/productsList',
    }).then((response) => {
      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body

      expect(response.status).to.eq(200)
      expect(body.responseCode).to.eq(200)
      expect(body.products).to.exist
      expect(body.products).to.be.an('array')
      expect(body.products).to.not.be.empty

      body.products.forEach((product) => {
        expect(product.id).to.exist
        expect(product.name).to.not.be.empty
        expect(product.price).to.not.be.empty
        expect(product.brand).to.not.be.empty
        expect(product.category).to.exist
      })
    })
  })
})