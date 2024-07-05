import axios from "axios";
import { queriesRoutes } from "../../shared/constants/";

export const carsApi = axios.create({
  baseURL: "http://localhost:3000/",
});

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await carsApi.get(queriesRoutes.categories);
    return response.data; // The array of categories
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Fetch all cars
export const fetchCars = async () => {
  try {
    const response = await carsApi.get(queriesRoutes.cars);
    return response.data; // The array of cars
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
}

