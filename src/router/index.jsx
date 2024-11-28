import { createBrowserRouter } from "react-router-dom";
import { Register, Login } from "../pages";



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
{
    path: "/Register",
    element: <Register />

},


])

export default router