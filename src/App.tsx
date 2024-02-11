import { Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Root from "./root";
import { routes } from "./routes";

export const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router root={Root}>{routes}</Router>
    </QueryClientProvider>
  );
};
