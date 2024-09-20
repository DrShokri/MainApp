import { createBrowserRouter } from "react-router-dom";

// pages
import Landing from "../../pages/Landing";

// layout
import MainLayout from "../../Layout/MainLayout";

export const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },

  /* {
    path: "/video",
    element: <VideoList />,
  }, */
]);
