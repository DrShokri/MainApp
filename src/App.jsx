import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./configs/router/public.router";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={PublicRouter} />
    </NextUIProvider>
  );
}

export default App;
