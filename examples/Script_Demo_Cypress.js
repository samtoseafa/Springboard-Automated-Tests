/// <reference types = "cypress" /> // sets up Cypress environment

it('Google test', function () {
	cy.visit('https://google.com')  //enables you to visit independent webpages
	/* See cypress.json - put some changes in there to prevent 
	 * asserts when switching between webpages
	 * "chromeWebSecurity": false
	 */ 
	cy.get('.gLFyf', { timeout: 6000 }).type('Springboard Collaborative{enter}') // can use interact tool to obtain this code
	//enter keyword manually typed- check for other keystrokes needed.
	cy.wait(4000) // in milliseconds, so that's 4 seconds
	//can be used to manually insert wait times
	cy.contains('Videos').click() // 'contains' used in cases where 'get' could not.
	//avoid due to non-specitivity
})

// 'it.only' only runs that specific function
// comment out first function to run this 'only' test
it.only('login test', function () {
	cy.visit('https://opensource-demo.orangehrmlive.com/')
	cy.get('#divUsername > .form-hint').type('admin')
	cy.get('#txtPassword').type('admin123')
	cy.get('#btnLogin').click()
	cy.get('#menu_admin_viewAdminModule > b').click()
	cy.get('#btnAdd').click()
})
