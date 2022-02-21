
let faker = require('faker');

const FULL_NAME = faker.name.findName();
const EMAIL = faker.internet.email();
const CURRENT_ADDRESS = faker.address.secondaryAddress();
const PERMANENT_ADDRESS = faker.address.secondaryAddress();

describe("Test Text Box", () => {
    it("Check if the User can fills all fields and clicks on the 'Submit' button", () => {
        cy.visit("/");

        cy.get('#userName')
            .type(FULL_NAME)
            .should("have.value", FULL_NAME);

        cy.get('#userEmail')
            .type(EMAIL)
            .should("have.value", EMAIL);

        cy.get('#currentAddress')
            .type(CURRENT_ADDRESS)
            .should("have.value", CURRENT_ADDRESS);

        cy.get('#permanentAddress')
            .type(PERMANENT_ADDRESS)
            .should("have.value", PERMANENT_ADDRESS);

        cy.get('#submit').click();

    });

    it("Check if the system returns the entered results after clicking the 'Submit' button", () => {

        cy.get('#output #name').contains(FULL_NAME);
        cy.get('#output #email').contains(EMAIL);
        cy.get('#output #currentAddress').contains(CURRENT_ADDRESS);
        cy.get('#output #permanentAddress').contains(PERMANENT_ADDRESS);

    });
});
