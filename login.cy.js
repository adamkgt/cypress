describe('Wrong login on website', () => {
  it('Wrong name and password', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://skleptest.pl/my-account/')
    cy.get('#username').type("test@email.com")
    cy.get('#password').type('password')
    cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > input.woocommerce-Button.button').click()
    cy.get('#post-8 > div.woocommerce > ul').should('be.visible').contains('The password you entered for the username test@email.com is incorrect. Lost your password?')
  })
})