import axios from "axios";
import Cookies from "js-cookie"

const path = axios.create({
  baseURL: import.meta.env.VITE_NEST_API_URL,
});

path.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    const token = Cookies.get('token');
    console.log('Token retrieved in interceptor:', token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.error('No token found in cookies');
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default path;
