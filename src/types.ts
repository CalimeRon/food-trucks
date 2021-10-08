export type FoodItem = "banana" | "fish" | "melon" | "meat" | "wheat";

export type ToShip = Record<FoodItem, number>;

export interface Truck {
  type: string;
  count: number;
  price: number;
  minTemp: number;
  volume: number;
  maxWeight: number;
  currentWeight: number;
}

export interface FoodInfo {
  name: FoodItem;
  maxTemp: number;
  volume: number;
  weight: number;
}

export type Summary = Record<string, number>
