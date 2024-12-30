import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Menu from "../pages/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts></MainLayouts>,
    children:[
    {  
      path:'/',
      element:<Home></Home>
    },
    {  
      path:'/',
      element:<Menu></Menu>
    }
    ]
  },
]);

export default router;
