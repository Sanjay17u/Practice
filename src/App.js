import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';  
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router"
import Kid from "./components/Kid";
import Men from "./components/Men";


const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};



const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <ProductCard/>
      },
      {
        path:"/kids",
        element: <Kid/>
      },
      {
        path:"/men",
        element: <Men/>
      },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);