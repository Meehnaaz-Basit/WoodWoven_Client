import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import AllItems from "./pages/AllItems";
import AddCraft from "./pages/AddCraft";
import MyCraft from "./pages/MyCraft";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./provider/AuthProvider";
import CraftDetail from "./components/CraftDetail";
import Update from "./components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allCrafts"),
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
        loader: () => fetch("http://localhost:5000/allCrafts"),
      },

      {
        path: "/add-cardItems",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/my-craft",
        element: <MyCraft></MyCraft>,
        loader: () => fetch("http://localhost:5000/allCrafts"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/craft-detail/:id",
        element: <CraftDetail></CraftDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allCrafts/${params.id}`),
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
