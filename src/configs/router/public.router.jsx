import { createBrowserRouter } from "react-router-dom";

// pages
import Landing from "../../pages/Landing";
import VideoList from "../../pages/VideoList";

export const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Landing />,
  },
  {
    path: "/video",
    element: <VideoList />,
  },
]);
