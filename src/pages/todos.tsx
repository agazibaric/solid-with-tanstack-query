import { A } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { For, Suspense } from "solid-js";
import { fetchTodos } from "../lib/api";
import { STALE_TIME } from "./todos.data";

export default function Todos() {
  const todosQuery = createQuery(() => ({
    queryKey: ["todo"],
    queryFn: () => fetchTodos(),
    staleTime: STALE_TIME,
  }));

  return (
    <div>
      <h1>Todos</h1>
      <Suspense fallback="loading">
        <For each={todosQuery.data?.todos}>
          {(todo) => <A href={`/todo/${todo.id}`}>{todo.todo}</A>}
        </For>
      </Suspense>
    </div>
  );
}
