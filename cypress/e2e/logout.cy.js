

describe('Verify the logout function', () => {
    beforeEach('Visit the login page first', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    })

    it('Check if the user is able to logout', () => {
        cy.get(':nth-child(5) > .oxd-userdropdown-link').click()
    })
})