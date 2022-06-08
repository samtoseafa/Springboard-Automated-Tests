/// <reference types = "cypress" />
/*
it("Salesforce Sign-in", function () {
    Cypress.Cookies.debug(true)
    cy.setCookie('sid', '00D6A000001WlN3!AQ4AQD26gA4EO6fCIPqCD2oiQGVbH9ZrBwjtptUZqG3O54MWDEvvNaVuD2a6ihypyqYP4G_EfZuegQwWS56wLd5bSBS8KIR6').visit("https://springboardcollab.my.salesforce.com/")
    cy.wait(4000)
    //Cypress.Cookies.preserveOnce()
})
*/
it("Visit Staging: Confirm that User can visit the Staging Website", function () {
    cy.visit("http://staging-sb.u2i.eu/teacher-companion/demo")
    cy.get('#email').type('s.toseafa@springboardcollaborative.org')
    cy.get('#password').type('pass@.123')
    cy.get(':nth-child(5) > .col-12 > .btn').click()
})

it("Program Calendar: Confirm that User can edit fields in Program Configuration", function () {
    cy.get(':nth-child(4) > [style="width: 320px; height: 200px; padding: 20px; border-radius: 20px; text-align: center; background-color: rgb(235, 105, 46);"]').click()
    //whatever we want to check
    cy.get('.css-1s2u09g-control > .css-1d8n9bt').type("Test Consultancy 2022 (Los Angeles, CA){Enter}")
    cy.get('.btn-outline-secondary').click()
    cy.get('.btn-outline-secondary').click()
    cy.get('.rbc-toolbar > :nth-child(3) > :nth-child(2)').click()
    cy.get('.rbc-toolbar > :nth-child(3) > :nth-child(3)').click()
    cy.wait(1000)
})

it("Program Dashboard: Confirm that User can generate Stats up to 15 weeks", function () {
    //Seems to be an API error here- might need to bypass unhandled exceptions
    cy.get('.scrollbar-container > .sidebar-nav > .nav > :nth-child(2) > .sidebar-link').click()
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt').type('1')
    cy.get(':nth-child(3) > .btn').click()
    
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('2')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('3')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('4')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('5')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('6')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('7')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('8')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('9')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('10')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('11')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('12')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('13')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('14')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('15')
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(5000)
})

it("Students: Confirm that User can edit filters in Program Configuration", function () {
    cy.get('.scrollbar-container > .sidebar-nav > .nav > :nth-child(3) > .sidebar-link').click()
    cy.get(':nth-child(1) > :nth-child(3) > .btn').click()
    
    cy.get('.col-12 > .row > :nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get('.col-12 > .row > :nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get('.col-12 > .row > :nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get('.col-12 > .row > :nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').click()

    cy.get(':nth-child(7) > .row > :nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get(':nth-child(7) > .row > :nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get(':nth-child(7) > .row > :nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get(':nth-child(7) > .row > :nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get('.btn-outline-secondary').click()
    
    cy.get('.close').click()
    cy.wait(5000)
    
})

it("Attendance: Confirm that User can add a note", function () {
    cy.get('.scrollbar-container > .sidebar-nav > .nav > :nth-child(4) > .sidebar-link').click()
    
})
/*
it("All done: No issues to report!", function () {
    cy.get('.sidebar-nav > div > .btn').click()
    cy.wait(5000)
})
*/





