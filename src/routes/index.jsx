import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";
import Notifications from "../pages/notifications";
import Explore from "../pages/explore";
import MainLayout from "../layout/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },

      {
        path: "/explore",
        element: <Explore></Explore>,
      },

      { path: "/notifications", element: <Notifications></Notifications> },
    ],
  },
]);

export default routes;
