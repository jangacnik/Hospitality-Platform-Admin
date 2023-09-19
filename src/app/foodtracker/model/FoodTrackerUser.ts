export class FoodTrackerUser {
  lastName: string;
  firstName: string;
  email: string;
  employeeNumber: string;

  constructor(lastName: string, firstName: string, email: string, employeeNumber: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.employeeNumber = employeeNumber;
  }
}
