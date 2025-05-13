import React from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Reports from "./components/reports";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Mocktest from "./components/Mocktest";
import Nopage from "./components/Nopage";

const Layout = () => {
  // const location =useLocation();
  // const isNotFoundPage = location.pathname ==='*' ;


  // is location hook is not being used here  but we can use this way 
  return (
    <div>
      { //!isNotFoundPage   && 
      <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "reports",
            element: <Reports />,
          },
          {
            path: "mocktest",
            element: <Mocktest />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      
    ],
  },
  { path: "*", element: <Nopage /> },
]);

function App() {


  return <RouterProvider router={router} />;
}

export default App;
