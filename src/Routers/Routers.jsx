import {    createBrowserRouter  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'portfolio',
          element: <Portfolio />
        }
      ]
    },
  ]);

export default router;