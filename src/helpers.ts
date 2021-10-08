import { foodDetails } from "./data";
import { FoodInfo, FoodItem, Summary, ToShip, Truck } from "./types";

export const populateItemArray = (
  shipped: ToShip,
  itemArray: FoodItem[]
): void => {
  let item: keyof typeof shipped;
  for (item in shipped) {
    while (shipped[item] > 0) {
      itemArray.push(item);
      shipped[item] -= 1;
    }
  }
};

export const findDetails = (item : FoodItem) : FoodInfo => {
  let foodInfo: FoodInfo = foodDetails[0];
  for (const food of foodDetails) {
    if (food.name === item) {
      foodInfo = food;
    }
  }
  return foodInfo;
};

export const truckFits = (truck : Truck, item : FoodInfo) : boolean => {
  if (
    truck.count > 0 &&
    truck.minTemp <= item.maxTemp &&
    truck.volume >= item.volume &&
    truck.maxWeight - truck.currentWeight >= item.weight
  ) {
    return true;
  }
  return false;
};

export const reduceTrucks = (fleet : Truck[]) : Summary => {
  const answer : Summary = { A: 0, B: 0, C: 0 };
  for (const truck of fleet) {
    answer[truck.type]++;
  }
  return answer;
};
