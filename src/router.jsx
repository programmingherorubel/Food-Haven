import { createBrowserRouter } from "react-router-dom";
import Error from "./Components/Error";
import PrivateRoute from "./Components/PrivateRoute";
import Blog from "./Pages/Blog";
import ChefInfo from "./Pages/ChefInfo";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reg from "./Pages/Reg";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>,
    },
    {
        path:'/chef/:id',
        element:<PrivateRoute><ChefInfo/></PrivateRoute>,
        loader:({params})=> fetch(`https://server-programmingherorubel.vercel.app/chefinformation/${params.id}`)
    },
    {
        path:'/blog',
        element:<Blog/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/reg',
        element:<Reg/>
    }
])

export default router