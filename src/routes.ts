import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import TodoData from "./pages/todo.data";
import TodosData from "./pages/todos.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
  {
    path: "/todo",
    component: lazy(() => import("./pages/todos")),
    load: TodosData,
  },
  {
    path: "/todo/:todoId",
    component: lazy(() => import("./pages/todo")),
    load: TodoData,
  },
  {
    path: "**",
    component: lazy(() => import("./pages/404")),
  },
];
