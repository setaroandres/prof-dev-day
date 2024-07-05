import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "../types";

export const useCategories = () => {
  const fetchCategories = async () => {
    const { data } = await axios.get("http://localhost:3000/categories");
    return data;
  };

  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
