import { Category, IVWCatalogInformation } from "../../shared/types";

export const VW_CATALOG_INFORMATION_MOCK: IVWCatalogInformation[] = [
  {
    id: 1,
    name: "Ford Bronco",
    year: 1982,
    category: "Vintage 4x4",
    price: 125500,
    img: "img.jpg",
    description: "Mocked description",
    brand: "Ford",
  },
  {
    id: 2,
    name: "Chevy Chevelle",
    year: 1982,
    category: "Muscle Car",
    price: 125500,
    img: "img.jpg",
    description: "Mocked description",
    brand: "Chevrolet",
  },
];

export const CATEGORIES_MOCK: Category[] = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
];

export const CAR_MOCK: IVWCatalogInformation = 
  {
    id: 1,
    name: 'Ford Falcon',
    year: 1975,
    category: 'Muscle Car',
    price: 15250,
    img: 'imageListClasses.jpg',
    description: 'Ford Falcon 1975 Description',
    brand: 'Ford',
  }

