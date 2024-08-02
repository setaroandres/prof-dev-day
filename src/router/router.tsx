import { createBrowserRouter } from "react-router-dom";
import {
  CategoryPage,
  DataLoadingPage,
  ErrorPage,
  ProductPage,
  CategoriesPage,
  CatalogPage,
  CarPage
} from "../cars/pages";
import { CarsLayout } from "../cars/layout";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.catalog,
    element: <CarsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.catalog,
        element: <CatalogPage />,
      },
      {
        path: ROUTES.categories,
        element: <CategoriesPage />,
      },
      {
        path: ROUTES.product,
        element: <ProductPage />,
      },
      {
        path: ROUTES.category,
        element: <CategoryPage />,
      },
      {
        path: ROUTES.car,
        element: <CarPage />,
      }
    ],
  },
  {
    path: ROUTES.dataLoading,
    element: <DataLoadingPage />
  }
]);
