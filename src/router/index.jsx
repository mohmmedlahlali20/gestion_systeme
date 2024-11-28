import { createBrowserRouter } from "react-router-dom";
import { Register, Login } from "../pages";
import { AllEvents, Dashboard } from "../components";
import Layouts from "../layouts/Layouts";



const router = createBrowserRouter([
    {

    path: "/",
    element: <Layouts/>,
    children: [
        {
            path:"/dashbord",
            element: <Dashboard/>
        },
        {
            path: "/all_event",
            element: <AllEvents/>
        }

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