import React from "react";
import { RouteObject } from "react-router-dom";

const TodoLayout = React.lazy(() =>
  import("./components/layout").then((module) => ({
    default: module.TodoLayout,
  }))
);

export const todoRoutes: RouteObject = {
  Component: TodoLayout,
  children: [
    {
      index: true,
      lazy: () => import("./routes/_index"),
    },
    {
      path: "about",
      lazy: () => import("./routes/about"),
    },
  ],
};
