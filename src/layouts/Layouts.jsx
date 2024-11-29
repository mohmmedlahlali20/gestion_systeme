import React from 'react'
import { Outlet } from "react-router-dom";
import { SidBar } from '../layouts';

export default function Layouts() {
    return (
        <div className="flex h-screen">
            <SidBar />
            <div className="flex-grow ml-64  overflow-y-auto bg-gradient-to-r from-teal-800 via-teal-300 to-teal-800">
                <div className="container mx-auto px-4 py-6 ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
