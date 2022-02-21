let faker = require('faker');

export const TEST_FIRST_NAME = faker.name.firstName();
export const TEST_LAST_NAME = faker.name.lastName();
export const TEST_EMAIL = faker.internet.email();
export const TEST_SALARY = faker.datatype.number();
export const TEST_AGE = Math.floor(Math.random() * 65) + 18;
export const TEST_DEPARTMENT = faker.lorem.word();