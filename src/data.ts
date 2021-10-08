import { FoodInfo, Truck } from './types';

export const trucksFleet: Truck[] = [
  {
    type: 'A',
    count: 3,
    price: 200,
    minTemp: 12,
    volume: 10,
    maxWeight: 100,
    currentWeight: 0,
  },
  {
    type: 'B',
    count: 3,
    price: 100,
    minTemp: 20,
    volume: 50,
    maxWeight: 200,
    currentWeight: 0,
  },
  {
    type: 'C',
    count: 10,
    price: 300,
    minTemp: 5,
    volume: 10,
    maxWeight: 50,
    currentWeight: 0,
  },
];

export const foodDetails: FoodInfo[] = [
  {
    name: 'banana',
    maxTemp: 15,
    volume: 1,
    weight: 30,
  },
  {
    name: 'fish',
    maxTemp: 6,
    volume: 2,
    weight: 40,
  },
  {
    name: 'melon',
    maxTemp: 20,
    volume: 5,
    weight: 50,
  },
  {
    name: 'meat',
    maxTemp: 10,
    volume: 1,
    weight: 30,
  },
  {
    name: 'wheat',
    maxTemp: 30,
    volume: 1,
    weight: 35,
  },
];