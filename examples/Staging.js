/// <reference types = "cypress" />
it("Salesforce Sign-in", function () {
    /*cy.visit("https://springboardcollab.my.salesforce.com/")  
    cy.get('#username').type("")
    cy.get('#password').type("")
    cy.get('#Login').click()
    */
    Cypress.Cookies.debug(true)
    Cypress.Cookies.preserveOnce()
    cy.setCookie('sid', '00D6A000001WlN3!AQ4AQD26gA4EO6fCIPqCD2oiQGVbH9ZrBwjtptUZqG3O54MWDEvvNaVuD2a6ihypyqYP4G_EfZuegQwWS56wLd5bSBS8KIR6').visit("https://springboardcollab.my.salesforce.com/")
    Cypress.Cookies.preserveOnce()
})


it("Visit Staging", function () {
    cy.visit("http://staging-sb.u2i.eu/teacher-companion/demo")
    cy.get('#email').type('qa-admin@u2i.com')
    cy.get('#password').type('pass123')
    cy.get(':nth-child(5) > .col-12 > .btn').click()
})

//it("Salesforce Sign-in", function () {
    /*cy.visit("https://springboardcollab.my.salesforce.com/")
    cy.get('#username').type("")
    cy.get('#password').type("")
    cy.get('#Login').click()
    */
//    Cypress.Cookies.debug(true)
//    Cypress.Cookies.preserveOnce()
//    cy.setCookie('sid', '00D6A000001WlN3!AQ4AQPQ1j96ctYZnQzpesvpfY0nuSrnBQWZ8m9oIwLdT3e3c8ZeV.S.h.eVgvsJ.D8E8CboyiIlMQIi9B441eYGzCKseOy5Q').visit("https://springboardcollab.my.salesforce.com/")
//})






