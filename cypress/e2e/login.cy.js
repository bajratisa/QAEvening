

describe('Verify the login functionality', () => {
  beforeEach('Visit the website before any command', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  it('Check if the user is able to login with null data', () => {
    
    
    cy.get('.oxd-button').click();
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
  }) 

  it('Check if the user is able to login with invalid data', () => {
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tisa')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tisa123')
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
  })

  it('Check if the user is able to login with valid username and invalid password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tisa123')
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
  })

  it('Check if the user is able to login with invalid username and valid password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tisa')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
  })

  it('Check if the user is able to login with valid username and valid password', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click();
    cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })
})