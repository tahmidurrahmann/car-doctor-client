import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Home/Login/Login";
import About from "../pages/About/About";
import PrivateRoute from "../private/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>,
        },
        {
          path : "/about",
          element : <PrivateRoute><About></About></PrivateRoute>
        }
      ]
    },
  ]);

export default router;