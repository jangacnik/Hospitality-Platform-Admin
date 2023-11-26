import {MealType} from "./enum/meal-type";

export class ReservationEntry {
  constructor(id: string, employeeNumber: string, mealType: MealType[], reservationDate: string) {
    this._id = id;
    this._employeeNumber = employeeNumber;
    this._mealType = mealType;
    this._reservationDate = reservationDate;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _employeeNumber: string;

  get employeeNumber(): string {
    return this._employeeNumber;
  }

  set employeeNumber(value: string) {
    this._employeeNumber = value;
  }

  private _mealType: MealType[];

  get mealType(): MealType[] {
    return this._mealType;
  }

  set mealType(value: MealType[]) {
    this._mealType = value;
  }

  private _reservationDate: string;

  get reservationDate(): string {
    return this._reservationDate;
  }

  set reservationDate(value: string) {
    this._reservationDate = value;
  }
}

