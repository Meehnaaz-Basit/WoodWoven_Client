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
import CraftByCategory from "./components/CraftByCategory";
import PrivateRoute from "./route/PrivateRoute";
import Error404 from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://woodwoven-server.vercel.app/allCrafts"),
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
        loader: () => fetch("https://woodwoven-server.vercel.app/allCrafts"),
      },

      {
        path: "/add-cardItems",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-craft",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>
          </PrivateRoute>
        ),
        loader: () => fetch("https://woodwoven-server.vercel.app/allCrafts"),
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
        path: "/*",
        element: <Error404></Error404>,
      },
      {
        path: "/craft-detail/:id",
        element: <CraftDetail></CraftDetail>,
        loader: ({ params }) =>
          fetch(
            `https://woodwoven-server.vercel.app/allCraftsDetail/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://woodwoven-server.vercel.app/allCraftsDetail/${params.id}`
          ),
      },
      {
        path: "/categories/:category",
        element: <CraftByCategory></CraftByCategory>,
        loader: ({ params }) =>
          fetch(
            `https://woodwoven-server.vercel.app/allCrafts/${params.category}`
          ),
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
