import { queryClient } from "../app";
import { fetchTodos } from "../lib/api";

export const STALE_TIME = 1000 * 60 * 5; // 5 mins

export async function getTodosData() {
  const todos = await queryClient.ensureQueryData({
    queryKey: ["todo"],
    queryFn: () => fetchTodos(),
    staleTime: STALE_TIME,
  });
  console.log("Todos prefetched", todos);

  return todos;
}

export default function () {
  void getTodosData();
}
