import { createBrowserRouter } from "react-router-dom";
import {
  CatalogPage,
  CategoryPage,
  DataLoadingPage,
  ErrorPage,
  ProductPage,
} from "../cars/pages";
import { CategoriesPage } from "../cars/pages/CategoriesPage";
import { CarsLayout } from "../cars/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CarsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CatalogPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "category/:id",
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: '/dataLoading',
    element: <DataLoadingPage />
  }
]);
