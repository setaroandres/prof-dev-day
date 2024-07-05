import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Car } from "../types";

export const useCars = () => {
  const fetchCars = async () => {
    const { data } = await axios.get("http://localhost:3000/cars");
    return data;
  };

  return useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });
};
