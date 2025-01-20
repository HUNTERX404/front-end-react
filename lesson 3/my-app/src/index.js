import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import AboutPage from "./components/pages/about";
import Navbar from "./components/pages/layout/navbar";
import MoviePage from "./components/pages/movie";
import Product from "./components/pages/movie/product";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/movies"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route index element={<MoviePage />} />
          <Route element={<Product />} path=":productId" />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
