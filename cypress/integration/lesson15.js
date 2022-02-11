import * as selectors from "./selectors.js"
import * as testData from "./testData"
import * as functions from "./functions"


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

        cy.contains(testData.TEST_FIRST_NAME);
        cy.contains(testData.TEST_LAST_NAME);
        cy.contains(testData.TEST_EMAIL);
        cy.contains(testData.TEST_AGE);
        cy.contains(testData.TEST_SALARY);
        cy.contains(testData.TEST_DEPARTMENT);

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

        cy.contains(testData.TEST_FIRST_NAME);
        cy.contains(testData.TEST_LAST_NAME);
        cy.contains(testData.TEST_EMAIL);
        cy.contains(testData.TEST_AGE);
        cy.contains(testData.TEST_SALARY);
        cy.contains(testData.TEST_DEPARTMENT);

    })

    it("Check if the search works for each field", () => {

        let SearchUser = cy.get(selectors.SEARCH_USER);

        cy.get(selectors.SEARCH).type(testData.TEST_FIRST_NAME);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_LAST_NAME);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_EMAIL);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_AGE);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_SALARY);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear().type(testData.TEST_DEPARTMENT);
        SearchUser.should("exist");

        cy.get(selectors.SEARCH).clear();

    })

    it("Check if the user can delete data ", () => {
        cy.get(selectors.DELETE_BUTTON).click();
        cy.get(selectors.TABLE).should("not.include.text", testData.TEST_EMAIL);
    })


    it("Check if user can sort by First Name", () => {

        cy.get(selectors.SORT_FIRST_NAMES).click()
            .should("have.class", selectors.ASC)
            .then(functions.getInnerText)
            .then((firstNames) => {
                let sortFirstNames = functions.stringSort(firstNames);
                expect(firstNames).to.deep.equal(sortFirstNames);
            })

        cy.get(selectors.SORT_FIRST_NAMES).click()
            .should("have.class", selectors.DESC)
            .then(functions.getInnerText)
            .then((firstNames) => {
                let sortFirstNames = functions.stringSort(firstNames);
                expect(firstNames).to.deep.equal(sortFirstNames);
            })
    })

    it("Check if user can sort by Last Name", () => {

        cy.get(selectors.SORT_LAST_NAMES).click()
            .should("have.class", selectors.ASC)
            .then(functions.getInnerText)
            .then((lastNames) => {
                let sortLastNames = functions.stringSort(lastNames);
                expect(lastNames).to.deep.equal(sortLastNames);
            })

        cy.get(selectors.SORT_LAST_NAMES).click()
            .should("have.class", selectors.DESC)
            .then(functions.getInnerText)
            .then((lastNames) => {
                let sortLastNames = functions.stringSort(lastNames);
                expect(lastNames).to.deep.equal(sortLastNames);
            })
    })

    it("Check if user can sort by Age", () => {

        cy.get(selectors.SORT_AGES).click()
            .should("have.class", selectors.ASC)
            .then(functions.getNumbers)
            .then((ages) => {
                let sortAges = functions.stringSort(ages);
                expect(ages).to.deep.equal(sortAges);
            })

        cy.get(selectors.SORT_AGES).click()
            .should("have.class", selectors.DESC)
            .then(functions.getNumbers)
            .then((ages) => {
                let sortAges = functions.stringSort(ages);
                expect(ages).to.deep.equal(sortAges);
            })
    })

    it("Check if user can sort by Email", () => {

        cy.get(selectors.SORT_EMAILS).click()
            .should("have.class", selectors.ASC)
            .then(functions.getInnerText)
            .then(functions.getNumbers)
            .then((emails) => {
                let sortEmails = functions.stringSort(emails);
                expect(emails).to.deep.equal(sortEmails);
            })

        cy.get(selectors.SORT_EMAILS).click()
            .should("have.class", selectors.DESC)
            .then(functions.getInnerText)
            .then(functions.getNumbers)
            .then((emails) => {
                let sortEmails = functions.stringSort(emails);
                expect(emails).to.deep.equal(sortEmails);
            })
    })

    it("Check if user can sort by Salary", () => {

        cy.get(selectors.SORT_SALARY).click()
            .should("have.class", selectors.ASC)
            .then(functions.getNumbers)
            .then((salary) => {
                let sortSalary = functions.stringSort(salary);
                expect(salary).to.deep.equal(sortSalary);
            })

        cy.get(selectors.SORT_SALARY).click()
            .should("have.class", selectors.DESC)
            .then(functions.getNumbers)
            .then((salary) => {
                let sortSalary = functions.stringSort(salary);
                expect(salary).to.deep.equal(sortSalary);
            })
    })

    it("Check if user can sort by Department", () => {

        cy.get(selectors.SORT_DEPARTMENTS).click()
            .should("have.class", selectors.ASC)
            .then(functions.getInnerText)
            .then((departments) => {
                let sortDepartments = functions.stringSort(departments);
                expect(departments).to.deep.equal(sortDepartments);
            })

        cy.get(selectors.SORT_DEPARTMENTS).click()
            .should("have.class", selectors.DESC)
            .then(functions.getInnerText)
            .then((departments) => {
                let sortDepartments = functions.stringSort(departments);
                expect(departments).to.deep.equal(sortDepartments);
            })
    })

})
