export class FoodTrackerUser {
  set oldEmail(value: string) {
    this._oldEmail = value;
  }
  lastName: string;
  firstName: string;
  email: string;
  private _oldEmail: string;
  employeeNumber: string;
  departments: string[];
  roles: string[];

  constructor(lastName: string, firstName: string, email: string, employeeNumber: string, departments: string[],roles: string[], oldEmail: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.employeeNumber = employeeNumber;
    this.departments = departments;
    this.roles = roles;
    this._oldEmail = oldEmail;
  }

}
