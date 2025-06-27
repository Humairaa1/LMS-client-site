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
            element:<BookDetails></BookDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: "/about",
          element:<About></About>
        },
    ]
  },
]);