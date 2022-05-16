/// <reference types = "cypress" />
it("Salesforce Sign-in", function () {
    cy.visit("https://springboardcollab.my.salesforce.com/")
    cy.get('#username').type("") //enter user id str
    cy.get('#password').type("") // enter password str
    cy.get('#Login').click()
})


it("Visit Staging", function () {
    cy.visit("http://staging-sb.u2i.eu/teacher-companion/")
})
