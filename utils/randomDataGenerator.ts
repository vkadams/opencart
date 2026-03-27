import {faker} from '@faker-js/faker';

export class RandomDataUtil
{
  static getFirstName(): string // to randomly generate first name
  {
    return faker.person.firstName();
  }

  static getLastName(): string // to randomly generate last name
  {
    return faker.person.lastName();
  }

  static getFullName(): string // to randomly generate full name
  {
    return faker.person.fullName();
  }

  static getEmail(): string // to randomly generate email address
  {
    return faker.internet.email();
  }

  static getUsername(): string 
  {
    return faker.internet.username();
  }

  static getPassword(): string 
  {
    return faker.internet.password();
  }

  static getPhoneNumber() // to randomly generate phone number
  {
    return faker.phone.number();
  }

  static getRandomCountry(): string  
  {
    return faker.location.country();
  }

  static getRandomState(): string  
  {
    return faker.location.state();
  }

  static getRandomCity(): string  
  {
    return faker.location.city();
  }

  static getRandomZip(): string  
  {
    return faker.location.zipCode();
  }

 static getRandomAddress(): string  
  {
    return faker.location.streetAddress();
  }

  static getRandomPassword(length: number = 10): string // random password with 10 characters 
  {
    return faker.internet.password({length});
  }

  static getRandomAlphanumeric(length: number = 10): string  
  {
    return faker.string.alphanumeric({length});
  }

  static getRandomNumeric(length: number): string  
  {
    return faker.string.numeric({length});
  }

  static getRandomUUID(): string  
  {
    return faker.string.uuid();
  }
}