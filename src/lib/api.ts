function delay(delayInMilliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
}

export async function fetchTodos() {
  await delay(1000);

  const response = await fetch("https://dummyjson.com/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");

  const todos = await response.json();
  console.log("Todos", todos);

  return todos;
}

export async function fetchTodo(todoId: string) {
  await delay(1000);

  const response = await fetch("https://dummyjson.com/todos/" + todoId);
  if (!response.ok) throw new Error("Failed to fetch todo");

  const todo = await response.json();
  console.log("Todo", todo);

  return todo;
}
