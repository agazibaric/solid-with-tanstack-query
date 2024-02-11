import { Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import App from "./App";
import { routes } from "./routes";

export const queryClient = new QueryClient();

export const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router root={App}>{routes}</Router>
    </QueryClientProvider>
  );
};
