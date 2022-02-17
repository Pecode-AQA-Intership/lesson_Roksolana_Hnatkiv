let faker = require('faker');

export const TEST_FIRST_NAME = faker.name.firstName();
export const TEST_LAST_NAME = faker.name.lastName();
export const TEST_EMAIL = faker.internet.email();
export const TEST_USER_NUMBER = faker.phone.phoneNumber("##########");
export const TEST_CURRENT_ADDRESS = faker.address.secondaryAddress();
export const FILE_PATH = 'monkey.jpeg';
