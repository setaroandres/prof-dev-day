import { createBrowserRouter } from "react-router-dom";
import {
  CategoryPage,
  DataLoadingPage,
  ErrorPage,
  ProductPage,
  CategoriesPage,
  CatalogPage
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
    ],
  },
  {
    path: ROUTES.dataLoading,
    element: <DataLoadingPage />
  }
]);
