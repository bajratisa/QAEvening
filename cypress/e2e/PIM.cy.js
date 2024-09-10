

describe('verify the PIM funtionality', () => {
    beforeEach('Visit the login page first', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    })

    

    it('Check if the user is able to click on the "add employee" button', () =>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        

    })
    
    
    it('Check if user is able to add employee with null data', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-button--secondary').click()
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text', 'Required')
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text', 'Required')
    })

    it('Check if the user is able to add employee with valid data', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-button--secondary').click()
    })

    it('Check if the user is able to add employee by removing the employee id', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get('.oxd-button--secondary').click()
    })

    it('Check if the user is able to upload profile picture', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('input[type="file"][class="oxd-file-input"]').selectFile("cypress/fixtures/TEDx.png", {force: true}, {failOnStatusCode: false})
    })

    it('Check if the user is able to add employee photo greater than 1mb.', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('input[type="file"][class="oxd-file-input"]').selectFile("cypress/fixtures/photo.jpg", {force: true})
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Attachment Size Exceeded')
    })
''
    it('Check if the user is able to add employee with the same employee id', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0295')
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Employee Id already exists')
        cy.get('.oxd-button--secondary').click()
    })

    it('Check if the user is able to add employee with the Username', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisab')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345tisa')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345tisa')
        cy.get('.oxd-button--secondary').click()
    })

    it('Check if the user is able to add employee with the same Username', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisab')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345tisa')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345tisa')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Username already exists')
    })

    it('Check if the user is able to add employee with different password in "confirm password" section', () => {
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Tisa')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bajracharya')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('tisa1')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345tisa')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123tisa')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Passwords do not match')
    })

    it('Check if the employee list is shown by filling null data.', () => {
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.get('.oxd-table-header > .oxd-table-row').should('be.visible')
    })

    it('Check if the employee list is displayed with only searching the employee name', () => {
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('tisa')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    })

    it('Check if the employee list is displayed with only searching the employee id', () => {
        cy.get(':nth-child(2) > .oxd-input').type('0395')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    })

    
})
