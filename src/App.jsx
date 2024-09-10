import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./configs/router/public.router";

function App() {
  return <RouterProvider router={PublicRouter} />;
}

export default App;
