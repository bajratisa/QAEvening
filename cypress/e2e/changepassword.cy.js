
describe('Verify Change Password Functionality', () => {
    beforeEach('Visit the login page first', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-userdropdown-name').click()
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
    })

    it('Check if the user is able to change password by entering null data', () => {
        
        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Passwords do not match')
    })

    it('Check if the user is able to change password by entering incorrect current password', () => {
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisa123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra1')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra1')
        cy.get('.oxd-button--secondary').click()
        
    })
    
    it('Check if the user is able to change password by reentering incorrect password', () => {
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra1')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra12')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Passwords do not match')
        
    })

    it('Check if the user is able to change password by entering valid new password', () => {
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra1')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisabajra1')
        cy.get('.oxd-button--secondary').click()
        
        
    })
})