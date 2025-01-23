import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router";
import HomePage from "./components/pages/home";
import AboutPage from "./components/pages/about";
import Navbar from "./components/layout/navbar";
import MoviePage from "./components/pages/movie";
import Product from "./components/pages/movie/product";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "*",
        element: (
          <>
            <h1 className="text-center font-bold text-4xl text-red-500">
              not found
            </h1>
          </>
        ),
      },
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/movies",
        element: <Outlet />,
        children: [
          { element: <MoviePage />, index: true },
          { path: ":productId", element: <Product /> },
        ],
      },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={route}>
      <Navbar></Navbar>
    </RouterProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
