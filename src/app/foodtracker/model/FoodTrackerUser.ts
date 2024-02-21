import {DepartmentListItem} from "./DepartmentListItem";

export class FoodTrackerUser {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  employeeNumber: string;
  departments: DepartmentListItem[];
  roles: string[];
  private _oldEmail: string;

  constructor(lastName: string, firstName: string, email: string, employeeNumber: string, departments: any, roles: string[], oldEmail: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.employeeNumber = employeeNumber;
    this.departments = departments;
    this.roles = roles;
    this._oldEmail = oldEmail;
  }


  set oldEmail(value: string) {
    this._oldEmail = value;
  }
}
