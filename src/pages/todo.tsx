import { useParams } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import { fetchTodo } from "../lib/api";
import { STALE_TIME } from "./todos.data";

export default function Todo() {
  const params = useParams();

  const todoQuery = createQuery(() => ({
    queryKey: ["todo", params.todoId],
    queryFn: () => fetchTodo(params.todoId),
    staleTime: STALE_TIME,
  }));

  return (
    <div>
      <h1>Todo</h1>
      <Suspense fallback="loading">
        <div>{todoQuery.data?.todo}</div>
      </Suspense>
    </div>
  );
}
