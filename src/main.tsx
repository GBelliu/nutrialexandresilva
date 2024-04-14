import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { SaibaMais } from "./pages/SaibaMais/index.tsx";
import { Links } from "./pages/Links/index.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/saiba-mais",
    element: <SaibaMais />,
  },
  {
    path: "/links",
    element: <Links />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </React.StrictMode>
);
