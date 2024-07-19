import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IVWCatalogInformation } from "../types";

export const useCatalog = () => {
  //TODO: Implement the fetchCategories function in a external service
  const fetchCatalog = async () => {
    const { data } = await axios.get("http://localhost:3000/catalog");
    return data;
  };

  return useQuery<IVWCatalogInformation[]>({
    queryKey: ["catalog"],
    queryFn: fetchCatalog,
  });
};