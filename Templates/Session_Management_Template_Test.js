/// <reference types = "cypress" />

it("Salesforce Sign-in", function () {
    Cypress.Cookies.debug(true)
    cy.setCookie('sid', '00D6A000001WlN3!AQ4AQD26gA4EO6fCIPqCD2oiQGVbH9ZrBwjtptUZqG3O54MWDEvvNaVuD2a6ihypyqYP4G_EfZuegQwWS56wLd5bSBS8KIR6').visit("https://springboardcollab.my.salesforce.com/")
    //Cypress.Cookies.preserveOnce()
})

it("Visit Staging", function () {
    cy.visit("http://staging-sb.u2i.eu/teacher-companion/demo")
    cy.get('#email').type('s.toseafa@springboardcollaborative.org')
    cy.get('#password').type('pass@.123')
    cy.get(':nth-child(5) > .col-12 > .btn').click()
})

it("Portal Users Check", function () {
    cy.get(':nth-child(8) > [style="width: 320px; height: 200px; padding: 20px; border-radius: 20px; text-align: center; background-color: rgb(151, 202, 62);"]').click()
    cy.wait(5000)
    cy.get(':nth-child(3) > .sidebar-link').click()
    cy.wait(5000)
    cy.get('.sidebar-nav > div > .btn').click()
})
