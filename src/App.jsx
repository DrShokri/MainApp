import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./configs/router/public.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider router={PublicRouter} />
    </QueryClientProvider>
  );
}

export default App;
