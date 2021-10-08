import { toShip } from "./mocks";
import { trucksFleet } from "./data";
import {
  populateItemArray,
  reduceTrucks,
  findDetails,
  truckFits,
} from "./helpers";
import { FoodItem, ToShip, Truck } from "./types";

const cheapestCombination = (toShip: ToShip): void => {
  let minCost = 0;
  let minFleet: Truck[] = [];
  const itemArray: FoodItem[] = [];

  if (!itemArray.length) populateItemArray(toShip, itemArray);

  const resolveCosts = (currentCost: number, currentFleet: Truck[]): void => {
    if (currentCost < minCost || minCost === 0) {
      minCost = currentCost;
      minFleet = [...currentFleet];
    }
  };

  const possibleScenarios = (
    itemArray: FoodItem[],
    currentFleet: Truck[] = [],
    currentCost = 0
  ): void => {
    const fullItem = findDetails(itemArray[0]);

    if (!itemArray.length) {
      resolveCosts(currentCost, currentFleet);
      return;
    }

    const addTruck = (truck: Truck): void => {
      const addedTruck = { ...truck };
      addedTruck.currentWeight += fullItem.weight;
      addedTruck.count = 1;
      addedTruck.volume -= fullItem.volume;
      currentCost += addedTruck.price;
      currentFleet.push(addedTruck);
      truck.count--;
    };

    const removeTruck = (truck: Truck): void => {
      currentFleet.pop();
      truck.count++;
      currentCost -= truck.price;
    };

    //fish and meat take one truck type C no matter what
    if (itemArray[0] === "fish" || itemArray[0] === "meat") {
      addTruck(trucksFleet[2]);
      const newArray = itemArray.slice(1);
      possibleScenarios(newArray, currentFleet, currentCost);
      removeTruck(trucksFleet[2]);
    } else {
      //Check if a truck in the current fleet can accept the current item
      for (let j = 0; j < currentFleet.length; j++) {
        if (truckFits(currentFleet[j], fullItem)) {
          const truck = currentFleet[j];
          truck.volume -= fullItem.volume;
          truck.currentWeight += fullItem.weight;
          const newArray = itemArray.slice(1);
          possibleScenarios(newArray, currentFleet, currentCost);
          truck.volume += fullItem.volume;
          truck.currentWeight -= fullItem.weight;
          return;
        }
      }

      //Need new truck
      for (let j = 0; j < trucksFleet.length; j++) {
        if (truckFits(trucksFleet[j], fullItem)) {
          addTruck(trucksFleet[j]);
          const newArray = itemArray.slice(1);
          possibleScenarios(newArray, currentFleet, currentCost);
          removeTruck(trucksFleet[j]);
        }
      }
    }
  };

  possibleScenarios(itemArray);

  const answer = reduceTrucks(minFleet);

  console.log(
    "The minimal cost is",
    minCost,
    "€, with the given breakdown:",
    answer
  );
};

cheapestCombination(toShip);
