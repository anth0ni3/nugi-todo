import { createBrowserRouter } from "react-router-dom";
import RootRoute, { rootLoader } from "./root";
import { authRoutes } from "./auth/routes";
import { todoRoutes } from "./todo/routes";
export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootRoute,
    loader: rootLoader,
    children: [authRoutes, todoRoutes],
  },
]);
