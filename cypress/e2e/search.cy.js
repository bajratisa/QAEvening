

describe('verify the search funtionality', () => {
    beforeEach('Visit the login page first', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      })

      it('Check if user is able to search with invalid data', () => {
        cy.get('input[placeholder="Search"]').type('tisa')
      })

      it('Check if user is able to search with valid data', () => {
        cy.get('input[placeholder="Search"]').type('dashboard')
        cy.get('.oxd-main-menu-item').should('have.text', 'Dashboard')
      })

      it('Check by entering a search term with leading spaces and Checking that the correct results are displayed.', () => {
        cy.get('input[placeholder="Search"]').type(' dashboard')
      })

      it('Check by entering a search term with trailing spaces and Checking that the correct results are displayed.', () => {
        cy.get('input[placeholder="Search"]').type('dashboard ')
      })  
})