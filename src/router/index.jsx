import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";



const router = createBrowserRouter([
    {

    path: "/",
    children: [

    ],

},

{
    path: "/login",
    element: <Login />

},


])

export default router