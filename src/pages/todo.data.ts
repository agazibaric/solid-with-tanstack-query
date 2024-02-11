import { RouteLoadFuncArgs } from "@solidjs/router";
import { fetchTodo } from "../lib/api";
import { queryClient } from "../router";
import { STALE_TIME } from "./todos.data";

export async function getTodoData(todoId: string) {
  const todo = await queryClient.ensureQueryData({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodo(todoId),
    staleTime: STALE_TIME,
  });
  console.log("Todo prefetched", todo);

  return todo;
}

export default function (args: RouteLoadFuncArgs) {
  console.log("Todo args", args);
  void getTodoData(args.params.todoId);
}
