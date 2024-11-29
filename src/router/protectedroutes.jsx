import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = Cookies.get('user');

        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                if (parsedUser.role !== 'organisateur') {
                    navigate('/authorization');
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
                navigate('/login');
            }
        } else {
            navigate('/login'); 
        }
    }, [navigate]);

    return (<>{children}</>); 

}

export default ProtectedRoute;
