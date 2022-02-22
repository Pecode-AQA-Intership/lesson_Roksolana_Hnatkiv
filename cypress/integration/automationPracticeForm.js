import * as data from "./const";
let selector = require("../pageObject/selectors.json");

describe("Test Student Registration Form", () => {
    it("Check if the User can fills all fields and clicks on the 'Submit' button", () => {
        cy.visit("/automation-practice-form");

        cy.get(selector.firstName)
            .type(data.TEST_FIRST_NAME)
            .should("have.value", data.TEST_FIRST_NAME);

        cy.get(selector.lastName)
            .type(data.TEST_LAST_NAME)
            .should("have.value", data.TEST_LAST_NAME);

        cy.get(selector.userEmail)
            .type(data.TEST_EMAIL)
            .should("have.value", data.TEST_EMAIL);

        cy.get(selector.genderOther)
            .check({ force: true })
            .should("have.css", "background-image");

        cy.get(selector.userNumber)
            .type(data.TEST_USER_NUMBER)
            .should("have.value", data.TEST_USER_NUMBER);

        cy.get(selector.dateOfBirth).click();
        cy.get(selector.month).select('3');
        cy.get(selector.year).select('2002');
        cy.get(selector.day).first().click();
        cy.get(selector.dateOfBirth).should("have.value", "07 Apr 2002");

        cy.get(selector.subject)
            .click()
            .type("Maths{enter}")
            .should("have.text", "Maths");

        cy.get(selector.hobbies)
            .click({ force: true, multiple: true })
            .should("have.css", "background-image");

        cy.get(selector.uploadPicture).attachFile(data.FILE_PATH);

        cy.get(selector.currentAddress)
            .type(data.TEST_CURRENT_ADDRESS)
            .should("have.value", data.TEST_CURRENT_ADDRESS);

        cy.get(selector.state).click()
            .type("Ut{enter}")
            .should("contain", "Uttar Pradesh");

        cy.get(selector.city).click()
            .type("Luck{enter}")
            .should("contain", "Lucknow");

        cy.get(selector.submitButton).click();

    })

    it("Check that the entered data is correct", () => {

        cy.get(selector.modalBody)
            .should("contain", data.TEST_FIRST_NAME)
            .and("contain", data.TEST_LAST_NAME)
            .and("contain", data.TEST_EMAIL)
            .and("contain", "Other")
            .and("contain", data.TEST_CURRENT_ADDRESS)
            .and("contain", data.TEST_USER_NUMBER)
            .and("contain", "07 April,2002")
            .and("contain", "Maths")
            .and("contain", "Reading","Sport", "Music")
            .and("contain", "Uttar Pradesh")
            .and("contain", "Lucknow")
            .and("contain", "monkey.jpeg");

        cy.get(selector.closeModal).click({ force: true });
    })

})