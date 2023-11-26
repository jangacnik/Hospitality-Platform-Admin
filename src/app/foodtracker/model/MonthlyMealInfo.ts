export class MonthlyMealInfo {
  constructor(employeeNumber: string, name: string, department: string[], mealCountUsed: number, mealCountReserved: number, mealTotalPrice: number) {
    this._employeeNumber = employeeNumber;
    this._name = name;
    this._department = department;
    this._mealCountUsed = mealCountUsed;
    this._mealCountReserved = mealCountReserved;
    this._mealTotalPrice = mealTotalPrice;
  }

  private _employeeNumber: string;

  get employeeNumber(): string {
    return this._employeeNumber;
  }

  set employeeNumber(value: string) {
    this._employeeNumber = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _department: string[];

  get department(): string[] {
    return this._department;
  }

  set department(value: string[]) {
    this._department = value;
  }

  private _mealCountUsed: number;

  get mealCountUsed(): number {
    return this._mealCountUsed;
  }

  set mealCountUsed(value: number) {
    this._mealCountUsed = value;
  }

  private _mealCountReserved: number;

  get mealCountReserved(): number {
    return this._mealCountReserved;
  }

  set mealCountReserved(value: number) {
    this._mealCountReserved = value;
  }

  private _mealTotalPrice: number;

  get mealTotalPrice(): number {
    return this._mealTotalPrice;
  }

  set mealTotalPrice(value: number) {
    this._mealTotalPrice = value;
  }
}
