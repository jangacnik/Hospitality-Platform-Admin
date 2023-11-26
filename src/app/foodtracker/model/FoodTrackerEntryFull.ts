import {FoodTrackerUserWithMealEntry} from "./FoodTrackerUserWithMealEntry";

export class FoodTrackerEntryFull {
  trackingId: string;
  entries: Map<String, FoodTrackerUserWithMealEntry>;

  constructor(trackingId: string, entries: Map<String, FoodTrackerUserWithMealEntry>) {
    this.trackingId = trackingId;
    this.entries = entries;
  }
}
