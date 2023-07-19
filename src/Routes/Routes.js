import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Category from "../Components/Category/Category";
import News from "../Components/News/News";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TermsCondition from "../Components/TermsCondition/TermsCondition";

const router = createBrowserRouter([{
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://dragon-news-server-rho-wine.vercel.app/news")
        },
        {
            path:"/category/:id",
            element:<Category></Category>,
            loader: ({params}) => fetch(`https://dragon-news-server-rho-wine.vercel.app/category/${params.id}`)
        },
        {
             path:"/news/:id",
             element: <PrivateRoute> <News></News></PrivateRoute>,
             loader: ({params}) => fetch(`https://dragon-news-server-rho-wine.vercel.app/news/${params.id}`)
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/terms",
            element: <TermsCondition></TermsCondition>
        }
    ]
}]);
export default router;