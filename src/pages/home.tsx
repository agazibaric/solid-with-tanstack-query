import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <A href="/todo">Todos</A>
    </div>
  );
}
