describe('Fluxo de compra' , () => {
   beforeEach(() =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})
  it('Deve adicionar um produto ao carrinho e finalizar a compra' , () =>{
    cy.contains('Add to cart').first().click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Checkout').click()

    cy.get('[data-test="firstName"]').type('Enrico' )
    cy.get('[data-test="lastName"]').type('Thomas')
    cy.get('[data-test="postalCode"]').type(1234)
    cy.contains('Continue').click()
    cy.contains('Finish').click()


  })



})