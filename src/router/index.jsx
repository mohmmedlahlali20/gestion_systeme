import { createBrowserRouter } from "react-router-dom";
import { Register, Login, Home, ShowAllEvents } from "../pages";
import { AllEvents, Dashboard, GetAllUsers } from "../components";
import Layouts from "../layouts/Layouts";
import ProtectedRoute from "./protectedroutes";
import Authorization from "./authorization";


const router = createBrowserRouter([
    {
      
        element: (
            <ProtectedRoute>
                <Layouts />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashbord", 
                element: <Dashboard />,
            },
            {
                path: "all_event",
                element: <AllEvents />,
            },
            {
                path: "all_Users",
                element: <GetAllUsers />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: '/authorization',
        element: <Authorization/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/users",
        element: <ShowAllEvents/>
    }

]);

export default router;
