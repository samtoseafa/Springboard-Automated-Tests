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
    cy.get(':nth-child(1) > [style="width: 320px; height: 200px; padding: 20px; border-radius: 20px; text-align: center; background-color: rgb(235, 105, 46);"]').click()
    cy.get('[style="display: flex; align-items: center; flex: 1 1 0%;"] > [style="width: 100%; max-width: 400px;"] > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type("April Teacher Companion Training Camp{Enter}")
    //get first user data
    cy.get('[data-id="2114"] > .MuiDataGrid-cell--withRenderer > .text-right > .btn-outline-info').click()
    cy.wait(4000)
    //write any changes
    cy.get('.close > span').click()
    cy.get('.sidebar-nav > div > .btn').click()
    //exit
})









