import * as selectors from "./selectors.js";
import * as testData from "./testData";
import * as functions from "./functions";


describe("Testing of Web Tables page", () => {
    before(() => {
        cy.visit("/webtables");
    })

    it("Check if the user can register on the Registration Form", () => {
        cy.get(selectors.ADD_NEW_RECORD_BUTTON).click();

        cy.get(selectors.FIRST_NAME).type(testData.TEST_FIRST_NAME)
            .should("have.value", testData.TEST_FIRST_NAME);

        cy.get(selectors.LAST_NAME).type(testData.TEST_LAST_NAME)
            .should("have.value", testData.TEST_LAST_NAME);

        cy.get(selectors.EMAIL).type(testData.TEST_EMAIL)
            .should("have.value", testData.TEST_EMAIL);

        cy.get(selectors.AGE).type(testData.TEST_AGE)
            .should("have.value", testData.TEST_AGE);

        cy.get(selectors.SALARY).type(testData.TEST_SALARY)
            .should("have.value", testData.TEST_SALARY);

        cy.get(selectors.DEPARTMENT).type(testData.TEST_DEPARTMENT)
            .should("have.value", testData.TEST_DEPARTMENT);

        cy.get(selectors.SUBMIT).click();

        cy.get(selectors.TABLE).should("include.text", testData.TEST_FIRST_NAME)
            .and("include.text", testData.TEST_LAST_NAME)
            .and("include.text", testData.TEST_EMAIL)
            .and("include.text", testData.TEST_AGE)
            .and("include.text", testData.TEST_SALARY)
            .and("include.text", testData.TEST_DEPARTMENT);

    })

    it("Check if the user can edit data on the Registration Form", () => {
        cy.get(selectors.EDIT_BUTTON).click();

        cy.get(selectors.FIRST_NAME).clear()
            .type(testData.TEST_FIRST_NAME).should("have.value", testData.TEST_FIRST_NAME);

        cy.get(selectors.LAST_NAME).clear()
            .type(testData.TEST_LAST_NAME).should("have.value", testData.TEST_LAST_NAME);

        cy.get(selectors.EMAIL).clear()
            .type(testData.TEST_EMAIL).should("have.value", testData.TEST_EMAIL);

        cy.get(selectors.AGE).clear()
            .type(testData.TEST_AGE).should("have.value", testData.TEST_AGE);

        cy.get(selectors.SALARY).clear()
            .type(testData.TEST_SALARY).should("have.value", testData.TEST_SALARY);

        cy.get(selectors.DEPARTMENT).clear()
            .type(testData.TEST_DEPARTMENT).should("have.value", testData.TEST_DEPARTMENT);

        cy.get(selectors.SUBMIT).click();

        cy.get(selectors.TABLE).should("include.text", testData.TEST_FIRST_NAME)
            .and("include.text", testData.TEST_LAST_NAME)
            .and("include.text", testData.TEST_EMAIL)
            .and("include.text", testData.TEST_AGE)
            .and("include.text", testData.TEST_SALARY)
            .and("include.text", testData.TEST_DEPARTMENT);

    })

    it("Check if the search works for each field", () => {

        let searchUser = cy.get(selectors.SEARCH_USER);

        cy.get(selectors.SEARCH).type(testData.TEST_FIRST_NAME);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_LAST_NAME);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_EMAIL);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_AGE);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_SALARY);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_DEPARTMENT);
        searchUser.should("exist");

        cy.get(selectors.SEARCH).clear();

    })

    it("Check if the user can delete data ", () => {
        cy.get(selectors.DELETE_BUTTON).click();
        cy.get(selectors.TABLE).should("not.include.text", testData.TEST_EMAIL);
    })


    it("Check if user can sort by First Name", () => {

        functions.sortByText(selectors.SORT_FIRST_NAMES, selectors.ASC);
        functions.sortByText(selectors.SORT_FIRST_NAMES, selectors.DESC);

    })

    it("Check if user can sort by Last Name", () => {

        functions.sortByText(selectors.SORT_LAST_NAMES, selectors.ASC);
        functions.sortByText(selectors.SORT_LAST_NAMES, selectors.DESC);

    })

    it("Check if user can sort by Age", () => {

        functions.sortByNumbers(selectors.SORT_AGES, selectors.ASC);
        functions.sortByNumbers(selectors.SORT_AGES, selectors.DESC);

    })

    it("Check if user can sort by Email", () => {

        functions.sortByTextAndNumbers(selectors.SORT_EMAILS, selectors.ASC);
        functions.sortByTextAndNumbers(selectors.SORT_EMAILS, selectors.DESC);

    })

    it("Check if user can sort by Salary", () => {

        functions.sortByNumbers(selectors.SORT_SALARY, selectors.ASC);
        functions.sortByNumbers(selectors.SORT_SALARY, selectors.DESC);

    })

    it("Check if user can sort by Department", () => {

        functions.sortByText(selectors.SORT_DEPARTMENTS, selectors.ASC);
        functions.sortByText(selectors.SORT_DEPARTMENTS, selectors.DESC);
    })

})
