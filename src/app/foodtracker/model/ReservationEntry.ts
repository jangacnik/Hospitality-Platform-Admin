import {MealType} from "./enum/meal-type";

export class ReservationEntry {
  private _id: string;
  private _employeeNumber: string;
  private _mealType: MealType[];
  private _reservationDate: string;

  constructor(id: string, employeeNumber: string, mealType: MealType[], reservationDate: string) {
    this._id = id;
    this._employeeNumber = employeeNumber;
    this._mealType = mealType;
    this._reservationDate = reservationDate;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get employeeNumber(): string {
    return this._employeeNumber;
  }

  set employeeNumber(value: string) {
    this._employeeNumber = value;
  }

  get mealType(): MealType[] {
    return this._mealType;
  }

  set mealType(value: MealType[]) {
    this._mealType = value;
  }

  get reservationDate(): string {
    return this._reservationDate;
  }

  set reservationDate(value: string) {
    this._reservationDate = value;
  }
}

