import { createHashRouter } from "react-router-dom";
import Home from "./modules/home";
import Network from "./modules/network";
import Services from "./modules/services";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/network",
      element: <Network />,
    },
    {
      path: "/services",
      element: <Services />,
    },
  ],
  {}
);

export default router;
