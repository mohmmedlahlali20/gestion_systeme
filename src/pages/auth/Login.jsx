import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/Slice/auth/login";
import path from "../../axios/axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await path.post("/auth/login", { email, password });
      
      const token = result.data.token
      Cookies.set('token', token)
      
      console.log('role',token.user.role);
      if (token.user.role === "organisateur") {
        navigate('/dashbord')
      } else {
        navigate('/Home')
      }

      dispatch(loginSuccess(result.data));
    } catch (err) {
      console.log("Login error:", err);
      dispatch(loginFailure(err.response?.data?.message || "Login failed")); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-teal-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            Welcome to EVENTO 2
          </h2>
          <form onSubmit={login}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-2 rounded-lg shadow-md transition duration-300 ${loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"}`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <div className="mt-4 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-teal-600 hover:text-teal-800"
            >
              I have an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
