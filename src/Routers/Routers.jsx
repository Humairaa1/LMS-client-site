import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cse from "../pages/CSE/Cse";
import Bba from "../pages/BBA/Bba";
import Civil from "../pages/Civil/Civil";
import Eee from "../pages/EEE/Eee";
import English from "../pages/English/English";
import Islamic from "../pages/Islamic/Islamic";
import Law from "../pages/Laws/Law";
import BookDetails from "../pages/BookDetails/BookDetails";
import Information from "../pages/Information/Information";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import MyRequest from "../MyRequest/MyRequest";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUser from "../pages/AllUser/AllUser";
import Librarian from "../pages/Librarian/Librarian";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/cse",
            element:<Cse></Cse>
        },
        {
            path: "/bba",
            element:<Bba></Bba>
        },
        {
            path: "/civil",
            element:<Civil></Civil>
        },
        {
            path: "/eee",
            element:<Eee></Eee>
        },
        {
            path: "/english",
            element:<English></English>
        },
        {
            path: "/islamic",
            element:<Islamic></Islamic>
        },
        {
            path: "/law",
            element:<Law></Law>
        },
        {
            path: "/book/:id",
            element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/information",
          element:<Information></Information>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },
        {
          path: "/librarian",
          element:<Librarian></Librarian>
        },
        {
          path: "/request",
          element:<MyRequest></MyRequest>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Registration></Registration>
        },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path: "/dashboard/all-users",
        element:<AllUser></AllUser>
      }
    ]
  }
]);