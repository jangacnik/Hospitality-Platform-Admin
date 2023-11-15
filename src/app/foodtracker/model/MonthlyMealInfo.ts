export class MonthlyMealInfo {
  get mealTotalPrice(): number {
    return this._mealTotalPrice;
  }

  constructor(employeeNumber: string, name: string, department: string[], mealCountUsed: number, mealCountReserved: number, mealTotalPrice: number) {
    this._employeeNumber = employeeNumber;
    this._name = name;
    this._department = department;
    this._mealCountUsed = mealCountUsed;
    this._mealCountReserved = mealCountReserved;
    this._mealTotalPrice = mealTotalPrice;
  }

  set mealTotalPrice(value: number) {
    this._mealTotalPrice = value;
  }
  get mealCountReserved(): number {
    return this._mealCountReserved;
  }

  set mealCountReserved(value: number) {
    this._mealCountReserved = value;
  }
  set mealCountUsed(value: number) {
    this._mealCountUsed = value;
  }
  get mealCountUsed(): number {
    return this._mealCountUsed;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get employeeNumber(): string {
    return this._employeeNumber;
  }

  set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  get department(): string[] {
    return this._department;
  }

  set department(value: string[]) {
    this._department = value;
  }
  private _employeeNumber: string;
  private _name: string;
  private _department: string[];
  private _mealCountUsed: number;
  private _mealCountReserved: number;
  private _mealTotalPrice: number;
}
