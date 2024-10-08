import { routesConfig } from "./routes";
import { RouterProvider } from "react-router-dom";

export const RoutesProvider = () => {
  return <RouterProvider router={routesConfig} />;
};
