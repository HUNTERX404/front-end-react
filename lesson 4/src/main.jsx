import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router";
import Login from "./components/pages/auth/login/index.jsx";
const route = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "", element: <App /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>
);
