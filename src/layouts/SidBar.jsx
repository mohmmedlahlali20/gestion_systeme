import { useEffect, useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { FaUsers, FaDoorOpen } from "react-icons/fa";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux"; 
import { logout as logoutAction  } from "../redux/Slice/auth/auth"; 

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const dispatch = useDispatch(); 
  const navigation = useNavigate()

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    dispatch(logoutAction());

    navigation("/login");
  };
  

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-teal-500 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          aria-expanded={collapseShow !== "hidden"}
          onClick={() => setCollapseShow(collapseShow === "hidden" ? "bg-teal-500 m-2 py-3 px-6" : "hidden")}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <a
                  className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  href="/"
                >
                  Notus React
                </a>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  aria-expanded="false"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                to="/dashbord"
                className="text-white hover:text-gray-300 flex items-center gap-2 text-sm font-semibold py-2"
              >
                <TbLayoutDashboard size={20} /> Dashbord
              </Link>
            </li>
            <li className="items-center">
              <Link
                to="/all_event"
                className="text-white hover:text-gray-300 flex items-center gap-2 text-sm font-semibold py-2"
              >
                <MdEventAvailable size={20} /> Show Events
              </Link>
            </li>
            <li className="items-center">
              <Link
                to="/all_Users"
                className="text-white hover:text-gray-300 flex items-center gap-2 text-sm font-semibold py-2"
              >
                <FaUsers size={20} /> All Users
              </Link>
            </li>
          </ul>
          <hr className="my-4 md:min-w-full" />
   
              <button
                onClick={logout}
                className="text-white hover:text-gray-300 flex items-center gap-2 text-sm font-semibold py-2"
              >
                <FaDoorOpen size={20} /> Logout
              </button>
           
        </div>
      </div>
    </nav>
  );
}
