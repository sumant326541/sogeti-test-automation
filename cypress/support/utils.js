//const faker = require('faker');
import faker from 'faker';
export const generateRandomUserData = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email()
  const phone = faker.phone.phoneNumberFormat(1);
  const company = faker.company.companyName();
  const message = faker.lorem.sentence();

  return {
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
  };
};
