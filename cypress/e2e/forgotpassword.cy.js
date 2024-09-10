
describe('Verify the forgot password functionality', () => {
    

    it('Check the forgot password button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot').click()
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    })

    it('Check if the user is able to change the password/ retrieve the old password with invalid data', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.get('.oxd-input').type('Tisa')
        cy.get('.oxd-button--secondary').click()
        cy.url().should('not.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset')
    })

    it('Check if the user is able to change the password/ retrieve the old password with valid data', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.get('.oxd-input').type('Admin')
        cy.get('.oxd-button--secondary').click()
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset')
    })
})