import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { MainPage } from "@/pages/MainPage/MainPage";
import { createBrowserRouter } from "react-router-dom";

export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);
