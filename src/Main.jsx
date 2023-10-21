import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "../src/assets/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={routes}></RouterProvider>
  </div>
);
